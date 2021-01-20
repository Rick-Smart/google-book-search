const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api/posts"
router
  .route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(bookController.findById)
  .delete(bookController.remove);

module.exports = router;
