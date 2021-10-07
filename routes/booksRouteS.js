const books = require('../models/Books');

module.exports = function (app) {
    app.get("/api/books", async function (req, res) {
        try {
            const booksData = await books.findAll();
            res.json(booksData);
        }
        catch (err) {
            res.status(500).json(err);
        }
    });


    app.post("/api/books", async function (req, res) {

        const newBody = {
            name: req.body.Name,
            author: req.body.Author,
            category: req.body.Category,
            stock_number: req.body.Stock_Number
        };

        try {
            const booksData = await books.create(newBody);
            res.json(booksData);
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: 'error with submission' });
        }
    });

    app.get("/api/category/:category", async function (req, res) {

        try {
            const booksData = await books.findByPk(req.params.Category);
            res.json(booksData);
        }
        catch (err) {
            res.status(500).json(err);
        }

    });

    app.delete("/api/book", async function (req, res) {

        const updateId = req.body.id;

        try {

            const bookData = await books.destroy({
                where: {
                    id: updateId
                }
            });

            res.json(bookData);
        }
        catch (err) {
            res.status(500).json(err);
        }
    });

    app.put("/api/book", async function (req, res) {


        // const updateId = req.body.id;

        const newBody = {
            status: req.body.reserved_status,
            updateId: req.body.id

        };
        console.log(newBody);
        try {
            const booksData = await books.update(
                newBody,
                {
                    where: {
                        id: updateId
                    }
                }

            );

            if (!booksData) {
                res.json({ message: 'No books Found' });
            }
            else {
                res.json(booksData);

            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    });

    app.put("/api/books", function (req, res) {
        books.update(
            req.body,
            {
                where: {
                    id: req.body.id
                },
            }).then(function (booksData) {
                res.json(booksData);


            });
    });

};