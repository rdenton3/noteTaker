const router = require('express').Router(); 
const { createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    let results = notes;
    // if (req.query) {
    //   results = filterByQuery(req.query, results);
    // }
    res.json(results);
  });

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    // req.body.id = animals.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);

    // if (!validateAnimal(req.body)) {
    //   res.status(400).send('The animal is not properly formatted.');
    // } else {
    //   const animal = createNewAnimal(req.body, animals);
    //   res.json(animal);
    // }
  });
  
  module.exports = router;