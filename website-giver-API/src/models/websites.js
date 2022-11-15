const mongoose = require('mongoose');


const WebsiteSchema = new mongoose.Schema({
    title: {
        type: String,
        reqired: true,
        minlength: 3
    },
    description: {
        type: String,
        reqired: true,
        minlength: 3
    },
    link: {
        type: String,
        reqired: true,
        minlength: 3
    },
    datetime: {
        type: String,
        reqired: true,
    }
})


const Website = new mongoose.model('Website', WebsiteSchema)

module.exports = Website