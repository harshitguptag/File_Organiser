#!/usr/bin/env node
let inputArr = process.argv.slice(2);
let fs= require("fs");
let path = require("path"); 

let helpobj = require("../commands/help");
let treeobj = require("../commands/tree");
let orgobj = require("../commands/organise");

let command = inputArr[0];

switch (command)
{
    case "tree":
        treeobj.treeKey(inputArr[1]);
        break;
    case "organise" :
        orgobj.organiseKey(inputArr[1]);
        break;
    case "help" :
        helpobj.helpKey(inputArr[1]);
        break;
    default :
        console.log("Enter again : ");
        break;
}

//Here is my Contribution.
