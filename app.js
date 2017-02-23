/**
 * Created by Home on 16/02/2017.
 */
"use strict";

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];

if (command === 'add') {

    var note = notes.addNote(argv.title, argv.body);
    if (note) {

        console.log(`Successfully added ${note.title}, with content: ${note.body}`);
    }
} else if (command === 'list') {

    var note = notes.listNote();

    note.forEach((note) => {

        console.log(`- ${note.title}`);
    });
} else if (command === 'read') {

    var note = notes.readNote(argv.title);

    if (note) {

        console.log(`Note: ${note}`);
    } else {

        console.log('Note not found');
    }
} else if (command === 'remove') {

    notes.removeNote(argv.title);
} else {

    console.log('Command not recognised');
}

