const axios = require("axios");
const Book = require("../models/books");

const url =
  "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=Za7MLCkDAtMtIfF0OsQoOoOEFIWbMKXk";

const getFullOverview = async (req, res) => {
  const today = new Date().toString().slice(0, 15);

  const oneBook = await Book.find();
  const bookDate = new Date(oneBook.date).toString().slice(0, 15);

  if (bookDate === today) {
    const result = await Book.find();
    return res.send(result);
  }

  const data = await axios.get(url);
  await Book.deleteMany({});
  const result = await Book.insertMany(data.data.results.lists[0].books);
  res.send(result);
};

const getAll = async (req, res) => {
  const result = await Book.find();
  res.send(result);
};

const getTopBooks = async (req, res) => {
  const result = await Book.find();
  res.send(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Book.findById(id);
  res.send(result);
};

const getByCategory = async (req, res) => {
  const category = req.query.category;
  const result = await Book.find({ publisher: category });

  res.send(result);
};

module.exports = {
  getFullOverview,
  getAll,
  getTopBooks,
  getById,
  getByCategory,
};
