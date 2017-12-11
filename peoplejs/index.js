module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('Bindings', context.bindings);
    context.log('Request', req);

    let peopleService = require('../services/people');
    let data = peopleService.getPeople();
    let random = parseInt(context.bindingData.r);

    if (random) {
        let _ = require('underscore');
        const i = _.random(0, data.count);
        const person = data.results[i];
       
        context.res = {
            body: person
        }
    } else {
        context.res = {
            body: data
        }
    }
    context.done();
};