const transformer = require('api-spec-transformer');

// Convert postman to swagger to slate docs
const postmanToSwagger = new transformer.Converter(transformer.Formats.POSTMAN, transformer.Formats.SWAGGER);
// const url = 'https://raw.githubusercontent.com/heremaps/postman-collections/master/places.postman_collection'
const url = 'https://www.getpostman.com/collections/8f9716a93d14fc04498e'


const renderSlateMarkdown = (apiObj) => {
    const converter = require('widdershins');
    let options = {}; // defaults shown
    options.codeSamples = true;
    options.httpsnippet = false;
    options.language_tabs = [{ 'go': 'Go' }, { 'java': 'Java' }, { 'javascript': 'JavaScript' }, { 'python': 'Python' }, { 'ruby': 'Ruby' }, {"C#": "C#"}];   
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