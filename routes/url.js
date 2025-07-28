const express = require("express");
const { handleGenerateNewShortURL } = require("../controllers/url");

const router = express.Router();

router.post("/shorten", handleGenerateNewShortURL);

module.exports = router;
