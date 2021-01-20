const AuthorController = require("../controller/author.controller");

module.exports = (app) => {
    // Connection Status
    app.get("/api", AuthorController.index);
    
    // Create
    app.post("/api/author/new", AuthorController.createAuthor);

    // Get ALL
    app.get("/api/author", AuthorController.allAuthors);
    
    // Get ONE
    app.get("/api/author/:id", AuthorController.oneAuthor);

    // Update ONE
    app.put("/api/author/:id", AuthorController.UpdateAuthor);

    // Delete ONE
    app.delete("/api/author/:id", AuthorController.deleteAuthor);
}
