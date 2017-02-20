/**
 * Created by Home on 16/02/2017.
 */
"use strict";

console.log("Starting App.js");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();

// var user = os.userInfo();
//
// fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}.`, (err) => {
//
//     if (err) {
//
//         console.log(`There was an error, ${user.username}`);
//     }
// });

var addRest = notes.add(4, 6);

console.log(addRest);