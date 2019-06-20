const express = require('express'); //let's require express module
const app = express(); //let's call it in a var usually called app
const path = require('path');

const port = 3000; //the port where the server is listened

//app answers to request sending an html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//listen the server on port 8080 and log something to the console
app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});
