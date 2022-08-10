const {Schema , mongoose} = require('mongoose')


const userschema = new Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type: String,
        required : true,

    },
    password :{
        type: String,
        required : true,   
    }
})

module.exports = mongoose.model("user",userschema)
