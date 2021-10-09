const express = require("express");
const path = require('path');
const app = express();
const sequelize = require('./config/connection.js')
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const routes = require('./routes/index.js');



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
// app.set('views', __dirname);



// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({ helpers });

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);
// console.log(routes);
//API 
//require("./routes/adminRoute")(app);
require("./routes/adminRouteS")(app)
require("./routes/booksRouteS")(app)
require("./routes/userRouteS")(app)
// require("./routes/reviewRouteS")(app);

//require("./routes/userRoute")(app);



sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, function () {
        console.log("App listening on PORT: " + PORT);
    });
})
