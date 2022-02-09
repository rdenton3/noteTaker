const router = require('express').Router(); 
// const { createNewNote } = require('../../lib/notes');
const noteArr = require('../../db/db.json');
const fs = require('fs')

router.get('/notes', (req, res) => {
    // use fs to read in the notes from the db.json file
    let noteData = JSON.parse(fs.readFileSync("./db/db.json", 'utf8'))
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
    // push the new note into the notes array from db.json
    noteArr.push(newNote)
    // then write down the file back into the db.json
    fs.writeFile('./db/db.json',JSON.stringify(noteArr), (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(`${title} note has successfully been uploaded`)
        }
    res.json(newNote)
    })
  });
  
  module.exports = router;