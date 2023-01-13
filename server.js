const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const PORT = 3002;
let db = require('./db/db.json');
const { v4: uuidv4 } = require('uuid');


//Add the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

//API Routes that communicates with the getNotes fetch call
app.get('/api/notes', (req, res) => {
  res.json(db);
}
)

//API Routes that communicates with the saveNotes fetch call
app.post('/api/notes', (req, res) => {
  req.body.id = uuidv4();
  console.log(req.body);
  db.push(req.body);
  fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
    if(err) throw err;
    res.json(db);
  });
}
)


//Setting up the router paths
app.get('/', (req, res) => {
    //res.send('Navigate to /send or /routes')
    res.sendFile(path.join(__dirname, '/public/index.html'))
  });

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});


app.listen(PORT, () =>
  console.log(`Note Taker is starting at http://localhost:${PORT}`)
);


// app.listen(3002, listening);

// function listening(){
//     console.log("Note Taker is starting...");
// }




