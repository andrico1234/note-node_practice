/**
 * Created by Home on 16/02/2017.
 */
"use strict";

console.log("Starting App.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];


if(command === 'add') {

    var note = notes.addNote(argv.title, argv.body);
    if (note) {

        console.log(`Successfully added ${note.title}, with content: ${note.body}`);
    }
} else if(command === 'list') {

    notes.listNote();
} else if(command === 'read') {

    notes.readNote(argv.title);
} else if(command === 'remove') {

    notes.removeNote(argv.title);
} else {

    console.log('Command not recognised');
}

