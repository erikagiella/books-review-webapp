const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");


// [Index] Get route to fetch all books
router.get("/", bookController.index);


// [Show] Get route to fetch a single book by ID
router.get("/:id", bookController.show);


module.exports = router;