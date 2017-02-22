"use strict";

console.log('Starting notes.js');

var addNote = (title, body) => {

    console.log(`Adding ${title} note, with content: ${body}`);
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

module.exports =  {

    addNote: addNote,
    listNote: listNote,
    readNote: readNote,
    removeNote: removeNote
};