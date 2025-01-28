const mongoose = require("mongoose")


const commentsSchema = new mongoose.Schema({
    comments:{
        username:{
            type:String,

        },
        message:{
            type: String,
            required: true,
        },
        commentedAt:{
            type:Date,
            default: Date.now,
        }
    }
})

const blogPosts = new mongoose.Schema({
    blogPosts:{
        title:{
            type: String,
            unique: true,
            minlength: 5,
        },
        content:{
            type: String,
            required: true,
            minlength: 50,
        },
        author:{
            type: String,

        },
        tags:{
            type:[String],
        },
        category:{
            type: String,
            default: "General",
        },
        likes:{
            type: [String],
        },
        createdAt:{
            type: Date,
            default: Date.now
        },
        updatedAt:{
            type:Date,
            default: Date.now,
        },
        comments: [commentsSchema]
        
    },
    
    
})



module.exports = mongoose.model("Blog Post", blogPosts);