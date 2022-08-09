const connect = require('./../database/db')
const {ObjectId } = require('mongodb');
const Book = require('../models/bookmodel')

exports.getAllBooks = async  (req,res) => {
   // const db = await connect();
   // const books = await db.collection("book").find().toArray();
    const books = await Book.find()
    res.json(books)
}

exports.addbook = async (req,res) => {
    //const db = await connect();
    //await db.collection("book").insertOne(req.body);
    try {
        await Book.create(req.body);
        res.status(201).json({data : "Books is Stored in Db"})
    } catch (error) {
        res.json(error.errors)
    }
}

exports.getbookById = async (req,res) => {
    const _id = ObjectId(req.params.id)
    //const db = await connect();
    //const book = await db.collection("book").findOne({_id})
    const book = await Book.find({_id})
    res.json(book)
}
exports.updateAbook = async (req,res) => {
    const _id = ObjectId(req.params.id)
    await Book.updateOne({_id},{$set : req.body})
    //const db = await connect();
    //await db.collection("book").updateOne()
    res.json({data: "Book is updated"})
}
exports.deleteBook = async (req,res) => {
    const _id = ObjectId(req.params.id)
    await Book.deleteOne({_id})
    // const db = await connect();
    // await db.collection("book").deleteOne({_id})
    res.status(204).json({data: "Book is gone"})
}