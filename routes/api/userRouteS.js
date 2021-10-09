const User = require('../../models/User');
const router = require('express').Router();
const session = require('express-session');
const withAuth = require('../../utils/withAuth');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

module.exports = function (app) {

    
    // app.post("/signup", function (req, res) {
    //     console.log(req);
    //     console.log("HEREEE")
    //     User.create({
    //         first_name: req.body.first_name,
    //         last_name: req.body.last_name,
    //         email: req.body.email,
    //         password: req.body.password

    //     })
    //         .then(function (userData) {
    //           //  res.redirect(307, "/api/login");
    //           //
    //           res.json(userData);
    //         })
    //         .catch(function (err) {
    //             res.status(401).json(err);
    //         });
    // });

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

router.delete("/api/users", async function (req, res) {

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

router.post("/signup", function (req, res) {
    console.log(req);
    console.log("HEREEE")
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

router.post('/login', async  (req, res) => {
    console.log("LOST!")
    console.log(req.body.email);
    console.log(req.body.password)
        try {
          const userData = await User.findOne({ where: { email: req.body.email } });
            console.log("Find one user ",userData);
          if (!userData) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again' });
            return;
          }
      
          const validPassword = await userData.checkPassword(req.body.password);
      
          if (!validPassword) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again' });
            return;
          }
      
          req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            
            res.json({ user: userData, message: 'You are now logged in!' });
          });
      
        } catch (err) {
            console.log(err);
          res.status(400).json(err);
        }
      });

    // User.findOne({
    //     where: {
    //     email: req.body.email
    //     }
    // }).then(dbUserData => {
    //     if (!dbUserData) {
    //         console.log(dbUserData);
    //     res.status(400).json({ message: 'No user with that email address!' });
    //     return;
    //     }
    //        const validPassword = dbUserData.checkPassword(req.body.password);
    //     if (!validPassword) {
    //         res.status(400).json({ message: 'Incorrect password!' });
    //         return;
    //     }
    //     req.session.save(() => {
    //       req.session.user_id = dbUserData.id;
    //       req.session.username = dbUserData.first_name;
    //       req.session.loggedIn = true;
    
    //       res.json({ user: dbUserData, message: 'You are now logged in!' });
    //     });
    // }).catch (err => {
    //     console.log(err)
    //     res.status(500).json({message: "internal server error"});
    // })

module.exports = router;