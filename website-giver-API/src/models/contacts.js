const mongoose = require('mongoose');
const validator = require('validator')

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        reqired: true,
        minlength: 3
    },
    email: {
        type: String,
        reqired: true,
        minlength: 3
    },
    subject: {
        type: String,
        reqired: true,
        minlength: 3
    },
    issus: {
        type: String,
        reqired: true,
        minlength: 3
    },
    datetime: {
        type: String,
        reqired: true,
    }
})


const Contact = new mongoose.model('Contact', ContactSchema)

module.exports = Contact