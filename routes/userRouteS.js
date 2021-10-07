const User = require('../models/User');


module.exports = function (app) {

    
    app.post("/api/signup", function (req, res) {
        User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password

        })
            .then(function (userData) {
              //  res.redirect(307, "/api/login");
              //
              res.json(userData);
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });

    app.get("/api/users", async function (req, res) {
        try {
            const userData = await User.findAll();
            res.json(userData);
        }
        catch (err) {
            res.status(500).json(err);
        }
    });


    app.get("/api/users/:id", async function (req, res) {

        try {
            const userData = await User.findByPk(req.params.id);
            res.json(userData);
        }
        catch (err) {
            res.status(500).json(err);
        }

    });

    app.delete("/api/users", async function (req, res) {

        const UpdateId = req.body.id;

        try {

            const userData = await User.destroy({
                where: {
                    id: UpdateId
                }
            });

            res.json(userData);
        }
        catch (err) {
            res.status(500).json(err);
        }
    });

   /* app.get("api/users", function (req, res){

        User.findAll()
        
        .then(function (userData) {
            //  res.redirect(307, "/api/login");
            //
            res.json(userData);
          })
    }
    
    )*/

};