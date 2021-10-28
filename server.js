const express = require("express");
const path = require('path');
const app = express();
const sequelize = require('./config/connection.js')
const exphbs = require('express-handlebars');
const helpers = require('./utils/withAuth');
const routes = require('./routes/index.js');
const session = require('express-session');
const bodyParser = require('body-parser');
var compression = require('compression')

const PORT = process.env.PORT || 8000;

const middleware = (req, res, next) => {
    console.log(`${req.method} ${req.path} at ${Date.now()}`);
    next();
}

app.use(middleware);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression({ filter: shouldCompress }))
 
function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
 
  // fallback to standard filter function
  return compression.filter(req, res)
}

// Set up sessions
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};
  
app.use(session(sess));

// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({ helpers });

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log("App listening on PORT: ", PORT);
    });
})
