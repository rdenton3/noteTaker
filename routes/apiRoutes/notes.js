const router = require('express').Router(); 
// const { createNewNote } = require('../../lib/notes');
const noteArr = require('../../db/db');
const fs = require('fs')

router.get('/notes', (req, res) => {
    // use fs to read in the notes from the db.json file
    let noteData = JSON.parse(fs.readFileSync('/Users/racheldenton/Desktop/bootcamp/Challenges/Challenge11/Develop/db/db.json', 'utf8'))
    // return response to be the notes data
    res.json(noteData);
    });

router.post('/notes', (req, res) => {
    console.log(req.body)
    // using destructuring to assign variables
    const { title, text } = req.body;
    // take info from note and create new note object
    let newNote = {
        title,
        text
    }

  });
  
  module.exports = router;