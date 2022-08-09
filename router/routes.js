const express = require('express')
const router = express.Router()
const bookrouter = require("./bookRoutes")
const path = require('path')

const PORT = 3000;

router.get('/' , (req , res) => {
    res.render("index", {name : "Rishabh"});
})

router.use(bookrouter)

router.all('/*' , (req,res) => {
    res.send('Page not Fnd');
})
module.exports = router;