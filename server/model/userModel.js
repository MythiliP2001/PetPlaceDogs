const mongoose= require('mongoose')


//define the structure of user, that stored in db
const userSchema = new mongoose.Schema({
    fullname:{type:String},
    email:{type:String},
    password:{type:String,  required: true,
        unique: true },
    images:{type:String}
},{timestamps:true})

//timestamp automatically add 2 files: createdAt & updateAt


//mongoose model created from schema
const userModel = new mongoose.model('user_pettb', userSchema)

module.exports =  userModel;