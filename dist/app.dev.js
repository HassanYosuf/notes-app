"use strict";

var _require = require("yargs"),
    describe = _require.describe;

var yargs = require("yargs");

var func = require('./func.js'); // console.log('hello world');
// Adding a node


yargs.command({
  command: 'add',
  describe: 'adding a new note',
  builder: {
    title: {
      describe: 'Note Title ',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note Content',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function handler(argv) {
    func.addNote(argv.title, argv.body);
  }
}); // removing a Node

yargs.command({
  command: 'remove',
  describe: 'removing a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function handler(argv) {
    console.log('removing a  note - ', argv.title);
  }
}); // Reading a Node

yargs.command({
  command: 'read',
  describe: 'Reading a new note',
  builder: {
    title: {
      describe: 'Note Title ',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function handler(argv) {
    console.log('Reading a new note - ', argv.title);
  }
}); // Listing a node

yargs.command({
  command: 'list',
  describe: 'listing a new note',
  handler: function handler(argv) {
    console.log('Listing notes - ');
  }
});
yargs.parse();