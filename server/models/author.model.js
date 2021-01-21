const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    // Strings
    name: {type: String, 
        required: [true, "Author's Name is Required!"], 
        minlength: [3, "The Author's Name must be at least 3 characters long!"]
    }
}, {timestamps: true});

module.exports.Author = mongoose.model("Author", AuthorSchema);