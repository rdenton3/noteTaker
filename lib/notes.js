const fs = require('fs');
const path = require('path');

// this is where the functions to handele the notes will go
// keeping them separate from the routes and server info
function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../data/animals.json'),
      JSON.stringify({ noteArray }, null, 2)
    );
    return animal;
  }