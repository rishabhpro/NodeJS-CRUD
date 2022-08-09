const express = require('express')
const app = express()
const routes = require("./router/routes")
const bodyparser = require("body-parser")
const connectDB = require('./database/db')
const PORT = 3000;

app.set('view engine', 'pug')

app.use(bodyparser.json())
app.use(routes)

connectDB().then(()=>{
    app.listen(PORT , (req,res) =>{
        console.log(`Server running at http://localhost:${PORT}`);
    });
});