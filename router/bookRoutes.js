const {ObjectId } = require('mongodb');
const express = require('express')
const bookrouter = express.Router()
const connect = require('./../database/db')
const bookcontroller = require('.././controllers/bookcontroller')


bookrouter.route('/')
.get(bookcontroller.getAllBooks)
.post(bookcontroller.addbook);


bookrouter.route('/:id')
.get(bookcontroller.getbookById)
.patch(bookcontroller.updateAbook)
.delete(bookcontroller.deleteBook);

module.exports = bookrouter;