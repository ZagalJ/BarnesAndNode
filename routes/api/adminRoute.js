
module.exports = function (app) {
    app.get("/api/admin", function (req, res) {
        const sql = `SELECT * FROM admin ORDER BY email`;

        db.query(sql, function (err, rows) {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }

            res.json(rows)
        });
    });

    
app.post("/api/admin", function (req, res) {
    console.log(req.body);
    const sql = `INSERT INTO admin (email, password) VALUES (?, ?)`;
    const params = [req.body.email, req.body.password];

    db.query(sql, params, function (err, db_result) {
        if (err) {
            res.status(500).json({ error: err.message })
            return;
        }
        res.json(true);
    })

    });


    app.get("/api/admin/:id", function (req, res) {

        const id = req.params.id;

        const sql = `SELECT * FROM admin WHERE id = ?`;

        db.query(sql, id, function (err, rows) {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }
            else if (!rows) {
                res.status(400).json({ message: 'No admin Found' })
            }
            else {
                res.json(rows[0]);
            }

        });
    });

    app.delete("/api/admin/:id", function (req, res) {
        const id = req.params.id;
        const sql = `DELETE FROM admin WHERE id = ?`;

        db.query(sql, id, function (err, db_result) {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }
            else if (!db_result.affectedRows) {
                res.json({ message: 'No admin Found or Deleted' })
            }
            else {
                res.json({ message: 'success' });
            }
        })
    });


};
