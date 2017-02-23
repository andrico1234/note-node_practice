"use strict";
const fs = require('fs');

console.log('Starting notes.js');

var fetchNotes = () => {

    if (fs.existsSync('notes-data.json')) {

        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } else {

        return [];
    }
};

var saveNotes = (notes) => {

    fs.writeFileSync(`notes-data.json`, JSON.stringify(notes));
};

var addNote = (title, body) => {

    var notes = fetchNotes();
    var note = {

        body: body,
        title: title
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {

        notes.push(note);
        saveNotes(notes);
        return note;
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