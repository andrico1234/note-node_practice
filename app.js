/**
 * Created by Home on 16/02/2017.
 */
"use strict";

console.log("Starting App.js");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString('Andrico'));

// var user = os.userInfo();
//
// fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}.`, (err) => {
//
//     if (err) {
//
//         console.log(`There was an error, ${user.username}`);
//     }
// });
