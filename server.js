const express = require("express");
const path = require('path');
const app = express();
const sequelize = require('./config/connection.js')
const exphbs = require('express-handlebars');
const helpers = require('./utils/withAuth');
const routes = require('./routes/index.js');
const session = require('express-session');



const PORT = process.env.PORT || 3001;

const middleware = (req, res, next) => {
    console.log(`${req.method} ${req.path} at ${Date.now()}`);
    next();
}

app.use(middleware);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set up sessions
const SequelizeUser = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeUser({
      db: sequelize
    })
};
  
app.use(session(sess));


// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({ helpers });

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// console.log(routes);
//API 
//require("./routes/adminRoute")(app);
// require("./routes/index")(app)
// require("./routes/booksRouteS")(app)
// const userRoutes = require("./routes/api/userRouteS")(app)
// // require("./routes/reviewRouteS")(app);
//  app.use(userRoutes);
 app.use(routes);

//require("./routes/userRoute")(app);



sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, function () {
        console.log("App listening on PORT: " + PORT);
    });
})
