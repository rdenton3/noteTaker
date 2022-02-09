const router = require('express').Router(); 
// const { createNewNote } = require('../../lib/notes');
const noteArr = require('../../db/db.json');
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
router.delete('/notes/:id', (req,res) => {
    // have to read in current notes file
    let noteData = JSON.parse(fs.readFileSync("./db/db.json", 'utf8'))

    let newData = noteData.filter(note => {
        // exclude notes from array that have an id that matches the note we are trying to delete
        note.id !== req.params.id
    })
    // take new note data and write back to db.json file to be pulled in get request
    fs.writeFile('./db/db.json',JSON.stringify(newData), (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(`note has successfully been deleted`)
        }
    res.json(newData)
    })
}

)
  module.exports = router;