const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({

    urlCode: {
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    longUrl: {
        type:String,
        required: true,
        trim:true
        // valid url
    },
    shortUrl: {
        type:String,
        required: true,
        unique: true,
        trim:true
    }
}, {timestamps:true})

module.exports= mongoose.model('url', urlSchema)
