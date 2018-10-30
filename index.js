const express = require('express');
const os = require('os');
const faker = require('faker');

const app = express();
const port = 3000;

if (!process.env.WORD_TYPE) {
  throw Error("WORD_TYPE not set")
} else if (process.env.WORD_TYPE.toUpperCase() === "NOUN") {
  app.get('/noun/random', (req, res) => res.send({
    "word": faker.company.bsNoun()
  }))
} else if (process.env.WORD_TYPE.toUpperCase() === "ADJECTIVE") {
  app.get('/adjective/random', (req, res) => res.send({
    "word": faker.company.bsAdjective()
  }))
} else if (process.env.WORD_TYPE.toUpperCase() === "VERB") {
  app.get('/verb/random', (req, res) => res.send({
    "word": faker.company.bsBuzz()
  }))
} else {
  throw Error("WORD_TYPE not set")
}

app.listen(port, () => console.log(`Service started on port ${port}`));
