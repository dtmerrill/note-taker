// primary 'requires'
const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// calls express and sets port data
const app = express();
const PORT = process.env.PORT || 8080;

// prepares for parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('db'));

// routing (includes unique id information by object)
app.get('/api/notes', (req, res) => {
    const notesDB = require('./db/db.json')
    res.json(notesDB)
});

app.post('/api/notes', (req, res) => {
    const notesDB = require('./db/db.json');
    
    notesDB.forEach(obj => obj.id = uuidv4());
    
    const newNote = req.body;
    newNote.id = uuidv4();
    notesDB.push(newNote);
    
    fs.writeFile('./db/db.json', JSON.stringify(notesDB), err => {})
    
    res.json(newNote); 
})

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));
   
app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
    
// server set to listen
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
