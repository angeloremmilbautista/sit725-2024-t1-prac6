const express = require("express");
const router = express.Router();
const { submitForm } = require("../controllers/catController");

router.post("/api/cards", submitForm);

module.exports = router;