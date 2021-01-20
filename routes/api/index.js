const router = require("express").Router();
const bookRoutes = require("./book");

// Post routes
router.use("/books", bookRoutes);

module.exports = router;
