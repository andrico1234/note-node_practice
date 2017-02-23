"use strict";
const fs = require('fs');

console.log('Starting notes.js');

var addNote = (title, body) => {

    console.log(`Adding ${title} note, with content: ${body}`);
    var notes = [];
    var note = {

        body: body, title: title,
    };

    if (fs.existsSync('notes-data.json')) {

        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    }

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {

        notes.push(note);
        fs.writeFileSync(`notes-data.json`, JSON.stringify(notes));
    } else {

        console.log('Note title already exists');
    }
};

var listNote = () => {

    console.log('Getting all notes');
};

var readNote = (title) => {

    console.log(`Reading ${title} from list`);
};

var removeNote = (title) => {

    console.log(`Removing ${title} from list`);
};

module.exports = {

    addNote: addNote, listNote: listNote, readNote: readNote, removeNote: removeNote
};