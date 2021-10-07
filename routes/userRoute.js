const db = require("../db");

module.exports = function (app) {
    app.get("/api/users", function (req, res) {
        const sql = `SELECT * FROM user ORDER BY first_name`;

        db.query(sql, function (err, rows) {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }

            res.json(rows)
        });
    });

    app.post("/api/users", function (req, res) {
        console.log(req.body);
        const sql = `INSERT INTO user ( first_name, last_name, email,password) VALUES (?,?,?,?)`;
        const params = [ req.body.first_name, req.body.last_name, req.body.email, req.body.password ];

        db.query(sql, params, function (err, db_result) {
            if (err) {
                res.status(500).json({ error: err.message })
                return;
            }
            res.json(true);
        })
    })

    app.get("/api/users/:id", function (req, res) {
        

        const sql = `SELECT * FROM user WHERE userid = ?`;
        const userid = req.params.id;
        
            db.query(sql, userid, function (err, rows) {
                if (err) {
                    res.status(500).json({ error: err.message })
                    return;
                }
                else if (!rows) {
                    res.status(400).json({ message: 'No users Found' })
                }
                else {
                    res.json(rows[0]);
                }
    
            });
        });

       
    
          };
    

