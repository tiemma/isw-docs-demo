const transformer = require('api-spec-transformer');

// Convert postman to swagger to slate docs
const postmanToSwagger = new transformer.Converter(transformer.Formats.POSTMAN, transformer.Formats.SWAGGER);
// const url = 'https://raw.githubusercontent.com/heremaps/postman-collections/master/places.postman_collection'
const url = 'https://www.getpostman.com/collections/8f9716a93d14fc04498e'


const getSnippets = (swagger) => {
    let SwaggerSnippet = require('swagger-snippet')

    const targets = ['node_unirest', 'c'] // array of targets for code snippets. See list below...

    try {
    // either, get snippets for ALL endpoints:
    var results = SwaggerSnippet.getSwaggerSnippets(swagger, targets) // results is now array of snippets, see "Output" below.

    fs.writeFile("snippets", JSON.stringify(convertedData), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })
    } catch (err) {
    // do something with potential errors...
    }
}


const renderSlateMarkdown = (apiObj) => {
    const converter = require('widdershins');
    let options = {}; // defaults shown
    options.codeSamples = true;
    options.httpsnippet = false;
    // { 'go': 'Go' }, { 'java': 'Java' }, { 'javascript': 'JavaScript' },
    // options.language_tabs = [ { 'python': 'Python' }, { 'php': 'PHP' }, {"csharp": "C#"}, {"objc": "Obj. C"}, {"swift": "Swift"}];   
     //options.language_clients = [];
    //options.loadedFrom = sourceUrl; // only needed if input document is relative
    //options.user_templates = './user_templates';
    options.templateCallback = function (templateName, stage, data) { return data };
    options.theme = 'darkula';
    options.search = true;
    options.sample = true; // set false by --raw
    options.discovery = false;
    options.includes = [];
    options.shallowSchemas = false;
    options.tocSummary = false;
    options.headings = 2;
    options.yaml = false;

    //options.resolve = false;
    //options.source = sourceUrl; // if resolve is true, must be set to full path or URL of the input document
    return new Promise((resolve, reject) => {
        converter.convert(apiObj, options, function (err, str) {
            if (err) {
                console.log(err.stack);
                reject(str)
            }
            resolve(str);
        });
    })

}

postmanToSwagger.loadFile(url, function (err) {
    if (err) {
        console.log(err.stack);
        return;
    }

    postmanToSwagger.convert('json')
        .then(function (convertedData) {
            // convertedData is a swagger JSON obj
            const fs = require('fs');

            
            renderSlateMarkdown(convertedData).then((resp) => {
                fs.writeFile("swagger.json", JSON.stringify(convertedData), function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("The file was saved!");
                })
                fs.writeFile("../slate-docker/temp/index.html.md", resp, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("The file was saved!");
                })
            });
            console.log(convertedData)
        })
        .catch(function (err) {
            console.log(err);
        });
});