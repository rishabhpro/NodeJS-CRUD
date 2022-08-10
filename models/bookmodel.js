const {Schema , mongoose} = require('mongoose')


const BookSchema = new Schema({
    title :{
        type : String,
        validate:{
            validator: function(value){
                return /^[a-zA-Z\s]*$/.test(value);
            },
            message: 'Must be a valid title name'
        },
        required : true
    },
    author :{
        type: String,
        validate:{
            validator: function(value){
                return /^[a-zA-Z\s]*$/.test(value);
            },
            message: 'Must be a valid author name'
        },
        required : true,

    }
})

module.exports = mongoose.model("book",BookSchema ,"book")
