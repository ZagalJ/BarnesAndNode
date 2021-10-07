const express = require("express");
const app = express();
const sequelize = require('./config/connection.js')

const PORT = process.env.PORT || 3001;

const middleware = (req, res, next) => {
    console.log(`${req.method} ${req.path} at ${Date.now()}`);
    next();
}

app.use(middleware);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




//API 
//require("./routes/adminRoute")(app);
require("./routes/adminRouteS")(app)
require("./routes/booksRouteS")(app)
require("./routes/userRouteS")(app)
require("./routes/reviewRouteS")(app);

//require("./routes/userRoute")(app);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, function () {
        console.log("App listening on PORT: " + PORT);
    });
})

const express = require('express');
//const routes = require('./routes');

// import sequelize connection
const seq = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;


/// For API use only when API is ready
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
//app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
