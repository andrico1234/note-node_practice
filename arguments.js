"use strict";

const yargs = require('yargs');
var titleObj = {
    alias: 't',
    demand: true,
    describe: 'Title of note'

};

var giveArgs = () => {

    return yargs
        .command('add', 'Add a new note', {
            body: {
                alias: 'b',
                demand: true,
                describe: 'Body of note'
            },
            title: titleObj
        })
        .command('list', 'List all notes')
        .command('remove', 'Remove a note', {
            title: titleObj
        })
        .command('read', 'Read a note', {
            title: titleObj
        })
        .help().argv;
};

module.exports = {

    giveArgs: giveArgs
};