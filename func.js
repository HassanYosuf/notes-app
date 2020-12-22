// add read remove and list: 
const fs = require('fs');
const chalk = require('chalk');

// List a note
const listNotes = () => {
    const notes = load()
    if (notes.length !== 0) {
        console.log(chalk.blue.inverse(' List of all Notes '))
        console.log('--------')
        notes.forEach((note) => {
            console.log(`Title - ${note.title}`)
            console.log(`body - ${note.body}`)
        });
    } else {
        console.log('Not List avaliable')

    }

}

// Add a note
const addNote = (title, body) => {
    const notes = load()
    const noteExists = notes.filter((note) => {
        return note.title === title
    })
    if (noteExists.length === 0) {
        note.push({ title, body })

        save(notes)
        console.log(chalk.green.inverse(' SUCCESS '))
        console.log("New Note Addded")
    } else {
        console.log(chalk.redBright.inverse(' ERROR '))
        console.log("Note Title already EXIST")
    }
}


// remove a note
const removeNote = () => {
    const notes = load()
    const noteToKeep = notes.filter((note) => {
        return note.title === title
        if (noteToKeep.length < notes.length) {
            save(noteToKeep)
            console.log(chalk.green.inverse(' SUCCESS '))
            console.log('Note has been Removed')
        } else {
            console.log(chalk.redBright.inverse(' ERROR '))
            console.log('Not Does Not EXIST')
        }

    })


}

// read a note
const readNote = (title) => {
    const notes = load()
    const noteToRead = notes.filter((note) => {
        return note.title === title
    })
    if (noteToRead.length !== 0) {
        console.log(chalk.whiteBright.inverse('          '))

        console.log(`Title - ${nodeToRead[0].title}`)
        console.log(`Body - ${nodeToRead[0].body}`)
    } else {
        console.log(chalk.redBright.inverse(' ERROR '))
        console.log('Note does not EXIST')
    }


}



// load a note
const load = () => {
    try {
        const dataJSON = fs.readFileSync('notes.json').tostring()
        const data = JSON.parse(dataJSON)
        return data
    } catch (error) {
        return []
    }
}

// Save the notes
const save = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote,
    removeNote,
    readNote,
    listNotes
}