const router = require('express').Router(); 
// const { createNewNote } = require('../../lib/notes');
let noteArr = require('../../db/db.json');
const fs = require('fs');
const uuid = require('uuid');

router.get('/notes', (req, res) => {
    // use fs to read in the notes from the db.json file
    let noteData = JSON.parse(fs.readFileSync("./db/db.json", 'utf8'))
    // return response to be the notes data
    res.json(noteData);
    });
// post request allows user to update note and display to webpage
router.post('/notes', (req, res) => {
    console.log(req.body)
    // using destructuring to assign variables
    const { title, text } = req.body;
    const id = uuid.v4()
    // take info from note and create new note object
    let newNote = {
        title,
        text,
        id
    }
    // push the new note into the notes array from db.json
    noteArr.push(newNote)
    console.log(newNote)
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

// allows user to delete note
router.delete("/notes/:id", (req, res) => {
    // reassign notes array to be a filtered array that doesnt contain the id of the note we want
    // to delete
    noteArr = noteArr.filter(note => note.id !== req.params.id);
    // rewrite file down
    fs.writeFileSync("./db/db.json", JSON.stringify(noteArr));
    res.json(noteArr);
  })


  module.exports = router;