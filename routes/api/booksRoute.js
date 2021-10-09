const db = require("../../db");

module.exports = function (app) {
    app.get("/api/books", function (req, res) {
        const sql = `SELECT * FROM books ORDER BY name`;

        db.query(sql, function (err, rows) {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }

            res.json(rows)
        });
    });

     // POST route for saving a new book
  app.post("/api/books", function(req, res) {

    const sql = `INSERT INTO books (name, category,author,ISBN_number) VALUES (?, ?, ?, ?)`;
        const params = [req.body.name, req.body.category, req.body.author, req.body.ISBN_number];

        db.query(sql, params, function (err, db_result) {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }
            res.json(true);
        })

    });

    app.get("/api/books/category/:category", function(req, res) {
        const sql = `SELECT * FROM books WHERE Category = ?`;
        const category =  req.params.category;
        db.query(sql, category, function (err, rows) {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }
            res.json(rows);
        })

    });
    app.put("/api/book/bookstatus", function(req, res) {
        const sql = `UPDATE books SET reserved_st = ? WHERE bookid = ?`;
       
       
        const params = [req.body.reserved_st,req.body.bookid]
        
        db.query(sql, params, function (err, db_result) {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }
            else if (!db_result.affectedRows) {
                res.json({ message: 'No book Found' })
            }
            else {
                res.json({ message: 'success' });
            }
        })

        

    });

};