const { describe } = require("yargs");
const yargs = require("yargs");
const func = require('./func.js');
// console.log('hello world');

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
            type: 'string',
        }
    },
    handler: (argv) => {
        func.addNote(argv.title, argv.body)
    }
})

// removing a Node
yargs.command({
    command: 'remove',
    describe: 'removing a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv) => {
        func.removeNote(argv.title)
    }
})

// Reading a Node
yargs.command({
    command: 'read',
    describe: 'Reading a new note',
    builder: {
        title: {
            describe: 'Note Title ',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv) => {
        func.readNote(argv.title)
    }
})

// Listing a node
yargs.command({
    command: 'list',
    describe: 'listing a new note',

    handler: (argv) => {
        console.log('Listing notes - ')
    }
})
yargs.parse()