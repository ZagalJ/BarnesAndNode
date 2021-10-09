const router = require('express').Router();
const userRoutes = require('./userRouteS');
const bookRoutes = require('./booksRouteS')

router.use('/users', userRoutes);
router.use('/books', bookRoutes)

// Export the router
module.exports = router;