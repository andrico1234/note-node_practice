/**
 * Created by Home on 16/02/2017.
 */
"use strict";

console.log("Starting App.js");

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');

var command = process.argv[2];
var commandArg = process.argv[3];

console.log(`Command: ${command}, ${commandArg}`);

if (command === 'add') {

    console.log('Adding new note');
} else if (command === 'list') {

    console.log('Listing all notes');
} else if (command === 'remove') {

    console.log('Removing note');

} else if (command === 'read') {

    console.log('Reading note');
} else {

    console.log('Command not recognised');
}

