const Reviews = require('../models/Reviews');
//const User = require('../models/User');
module.exports = function (app) {
/*app.post("/api/reviews", function (req, res) {
    Reviews.create(
        req.body,
        {
            where: {
                bookid: req.body.book_id
            
            },
        }).then(function (reviewData) {
            res.json(reviewData);


        });
});*/

app.post("/api/reviews", async function (req, res) {
    
    const newBody = {
        user_id: req.body.user_id
     
    };
    try {
        const reviewData = await Reviews.create(newBody)

        
        res.json(reviewData);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'error with submission' });
    }
});

app.get("/api/reviews/:id", async function (req, res) {
    try {
        const reviewData = await Reviews.findByPk(req.params.book_id);
        res.json(reviewData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
};