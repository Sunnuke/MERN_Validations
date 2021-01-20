const { Author } = require("../models/author.model");

// Connection Status
module.exports.index = (request, response) => {
    response.json({
        message: "Connected!"
    });
}

// Create
module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({ name })
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

// Get ALL
module.exports.allAuthors = (request, response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(err => response.json(err));
}

// Get ONE
module.exports.oneAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

// Update ONE
module.exports.UpdateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
        .then(updated => response.json(updated))
        .catch(err => response.json(err));
}

// Delete ONE
module.exports.deleteAuthor = (request, response) => {
    Author.findOneAndDelete({_id: request.params.id})
        .then(deleted => response.json(deleted))
        .catch(err => response.json(err));
}