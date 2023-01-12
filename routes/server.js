const fs = require('fs');
const express = require('express');
const app = express();
app.listen(3002, listening);

function listening(){
    console.log("Note Taker is starting...");
}

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Navigate to /send or /routes')
  });

  app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);
