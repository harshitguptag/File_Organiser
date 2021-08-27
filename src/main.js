#!/usr/bin/env node
let inputArr = process.argv.slice(2);
let fs= require("fs");
let path = require("path"); 
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}
let helpobj = require("./commands/help");
let treeobj = require("./commands/tree");
let orgobj = require("./commands/organise");
// console.log(inputArr);
// node main.js tree "diectorypath"
// node main.js organise "diectorypath"
// node main.js help

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
