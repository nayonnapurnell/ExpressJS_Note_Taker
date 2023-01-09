const express = require('express');
const app = express();
app.listen(3001, listening);

function listening(){
    console.log("Server is starting...");
}

app.use(express.static('website'));

