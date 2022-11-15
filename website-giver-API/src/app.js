const express = require('express')
const Website = require('../src/models/websites')
const Game = require('../src/models/games')
const Contact = require('../src/models/contacts')
const cors = require('cors')
require("../src/db/connect")

const app = express()
const port = process.env.PORT || 3020

app.use(cors())
app.use(express.json());

// Home
app.get('/', (req, res) => {
    res.status(404).send("No Page Found");
});

// Weblinks
app.post('/websites', (req, res) => {
    const website = new Website(req.body);
    website.save().then(() => {
        res.status(200).send(website);
    }).catch((e) => {
        res.status(404).send(e);
    })
})

app.get('/websites', (req, res) => {
    Website.find().then((data) => {
        res.status(200).send(data);
    }).catch((e) => {
        res.status(404).send(e);
    });
});

// Gameslinks
app.post('/games', (req, res) => {
    const game = new Game(req.body);
    game.save().then(() => {
        res.status(200).send(game);
    }).catch((e) => {
        res.status(404).send(e);
    })
})

app.get('/games', (req, res) => {
    Game.find().then((data) => {
        res.status(200).send(data);
    }).catch((e) => {
        res.status(404).send(e);
    });
});

// Contactlinks
app.post('/contact', (req, res) => {
    const contact = new Contact(req.body);
    contact.save().then(() => {
        res.status(200).send(contact);
    }).catch((e) => {
        res.status(404).send(e);
    })
})

app.get('/contact', (req, res) => {
    Contact.find().then((data) => {
        res.status(200).send(data);
    }).catch((e) => {
        res.status(404).send(e);
    });
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})