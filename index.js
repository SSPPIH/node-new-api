
const express = require("express");
const app = express();
const port = 4000;

app.get('/',(req,res) => {
    res.send("This is a my Sample 123!&@!")
})

//Listen on port 5000
app.listen(port, () => {
    console.log('Server is booming on port 5000 Visit http://local:5000')
    //console.log('API Listening on Port  ${port}')
})

app.get('/about', (req,res) => {
    res.send('This is my about route')
})

module.exports = app

