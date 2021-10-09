const router = require('express').Router();
const sequelize = require('../config/connection');
const {Books} = require ('../models')
const withAuth = require('../utils/withAuth');


//route for main page
router.get('/', async (req, res) => {
  try {
    const dbBookdata = await Books.findAll();
    //get all books
    const libraries = dbBookdata.map((library) =>
      library.get({ plain: false })
    );
    res.render('home', {
      libraries
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//if users goes to /books gets redirected to main page
router.get('/books/', (req, res) => {
  res.redirect('/');
  return
});

//if user goes to home gets redirected to homepage
router.get('/home/', (req, res) => { 
    res.redirect('/');
    return
});

// GET one book
router.get('/books/:id', async (req, res) => {
  try {
    const dbBookdata = await Books.findByPk(req.params.id, {
      include: [
        {
          all:true
        }
      ],
    });

    const bookdata = dbBookdata.get({ plain: true });
    console.log("libraries: ", bookdata);
    res.render('book', { 
      bookdata 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//login
router.get('/login', async (req,res) => {
  if(req.session.loggedIn){
    res.redirect('/');
    return;
  }  
  res.render('login');

});

//sign up
router.get('/signup', async (req,res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

//admin route
router.get('/admin', async (req, res) => {
  
  res.render('adminLog')
})
module.exports = router;
