const Author = require("../models/author");
const asyncHandler = require("express-async-handler");

// Displaying list of all Authors
exports.author_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author list");
});

// Displaying detail page for specific Author
exports.author_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Author Detail: ${req.params.id}`);
});