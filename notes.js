"use strict";
const fs = require('fs');

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

    return fetchNotes();
};

var readNote = (title) => {

    var notes = fetchNotes();
    var noteToRead = notes.filter((note) => note.title === title);

    if (noteToRead[0] !== undefined) {

        return  noteToRead[0].body;
    }
    return false;
};

var removeNote = (title) => {

    console.log(`Removing ${title} from list`);

    var notes = fetchNotes();
    var notesToSave = notes.filter((note) => note.title !== title);

    if (notes.length == notesToSave.length) {

        console.log('File doesn\'t exist');
    } else {

        saveNotes(notesToSave);
    }
};

module.exports = {

    addNote: addNote, listNote: listNote, readNote: readNote, removeNote: removeNote
};