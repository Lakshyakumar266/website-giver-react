const mongoose = require('mongoose');


const GameSchema = new mongoose.Schema({
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


const Game = new mongoose.model('Game', GameSchema)

module.exports = Game