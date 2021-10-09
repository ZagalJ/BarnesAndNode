const admin = require('../models/Admins');

module.exports = function (app) {
    app.get("/api/admin", async function (req, res) {
        try {
            const adminData = await admin.findAll();
            res.json(adminData);
        }
        catch (err) {
            res.status(500).json(err);
        }
    });

    app.get("/api/admin/:id", async function (req, res) {

        try {
            const adminData = await admin.findByPk(req.params.id);
            res.json(adminData);
        }
        catch (err) {
            res.status(500).json(err);
        }

    });

    app.post("/api/admin", async function (req, res) {

        const newBody = {
           // id: req.body.id,
            email: req.body.email,
            password:req.body.password
        };

        try {
            const adminData = await admin.create(newBody);
            res.json(adminData);
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: 'error with submission' });
        }
    });



};