
// Create an instance of the debug server
const debug = require('debug')('api-spec-to-swagger/index.js');
const logger = require('morgan');
const multer = require('multer')({ dest: 'uploads/' });

// Request details definition
// This variable will either hold a url or a file path depending on the user input
// It's global cause the 
let requestDetails = null;

// Swagger to postman init
const _swagger2Postman = require('swagger2-to-postman');
const swagger2Postman = new _swagger2Postman();
swagger2Postman.setLogger(debug);

// Create an instance of the express server
const express = require('express');
const app = express();

// Express level inits and route configs
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Access-Token');
    next();
});

// Event listener for HTTP server "error" event.
let onError = function (error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? `Pipe ${port}`
        : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// Event listener for HTTP server "listening" event.
let onListening = function () {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? `pipe ${addr}`
        : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}

/**
 * Returns an error message and drops response logs for the request time
 * 
 * @param {*} res 
 * @param {*} error 
 * @param {*} statusCode 
 */
let returnErrorOnBadRequest = function (res, error, statusCode) {
    res.json({ "data": error }).status(statusCode);
}

/**
 * This handles returning the converted postman collection back in the request
 * 
 * @param {*} res 
 * @param {*} postmanCollection 
 */
let sendPostmanCollection = function (res, postmanCollection) {
    debug("Format conversion happened successfully");
    res.json({ "data": postmanCollection }).status(200); //write a response to the client
}

/**
 * Logs the file deleted along with any error that occurs during the process
 * 
 * @param {*} err 
 */
let logFileUnlink = function (err){
    if(err){
        debug(`Erorr whilst deleting file in : ${requestDetails.path}`)
    }
    debug(`File at ${requestDetails.path} has been deleted`);
}

/**
 * This is the function which handles API spec conversions to Postman
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
let transformFormatToPostman = function (req, res, next) {
    // Create the instance of the converter and specify a blank input format
    // The library supports auto detection of the input spec format
    const transformer = require('api-spec-transformer');

    // We convert from whatever format to Swagger so that we can then convert it to Postman
    // This makes it easier to have more API formats available, alongside Swagger and Postman
    // We can add extra functionality to convert it to our own API format
    const autoFormatToPostman = new transformer.Converter(transformer.Formats.AUTO, transformer.Formats.SWAGGER);

    // Assigns the right file type and path for easy management
    if (req.file == null) {
        requestDetails = {path: req.body.data, type: 'url'};
    } else {
        requestDetails = {path: req.file.path, type: 'file'};
    }

    // Return an error response if the file info isn't provided in the request
    if(requestDetails.path == null){
        returnErrorOnBadRequest(res, "Kindly provide a valid file or url to use this service", 400)
        return;
    }

    debug(`Processing request with the following details: ${JSON.stringify(requestDetails)}`)


    // Load the file from the request body url
    autoFormatToPostman.loadFile(requestDetails.path, function (err) {
        console.time('conversionStart');
        if (err) {

            debug(err.stack);
            returnErrorOnBadRequest(res, "An error occurred whilst loading the file", 500);
            return;

        } else {

            autoFormatToPostman.convert('json').then(function (swaggerJSON) {

                // Convert the swagger object to postman and return the json data
                console.time('swagger2Postman benchmark');
                sendPostmanCollection(res, swagger2Postman.convert(swaggerJSON));
                console.timeEnd('swagger2Postman benchmark');

                // Delete the file since it's not in use
                // Async operation done since it doesn't affect the flow
                if(requestDetails.type === 'file'){
                    require('fs').unlink(requestDetails.path, logFileUnlink);
                }
            });

        };
        console.timeEnd('conversionStart');
    });

};


// POST route definition with its handler function
app.post('/', multer.single('data'), transformFormatToPostman)



// Create a server object and define POST only endpoint
let server = require('http').createServer(app)

// Listen on provided port, on all network interfaces.
server.listen(process.env.PORT || 3000);

server.on('error', onError);
server.on('listening', onListening);
