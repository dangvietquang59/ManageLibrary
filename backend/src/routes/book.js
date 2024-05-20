const express = require("express");
const router = express.Router();

const bookController = require("../controllers/book");
const authMiddleware = require("../middleware/authentication");

router.get("/get-books", bookController.getBooks);
router.post(
  "/borrow-book",
  authMiddleware.verifyToken,
  bookController.borrowBook
);

module.exports = router;
