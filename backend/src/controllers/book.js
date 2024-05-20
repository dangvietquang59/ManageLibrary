const Book = require("../models/book");
const Borrow = require("../models/borrow");
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const borrowBook = async (req, res) => {
  try {
    const { bookId, userId, returnDate } = req.body;
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Sách không tồn tại" });
    }

    const borrow = new Borrow({
      bookId: bookId,
      userId: userId,
      returnDate: returnDate,
    });

    await borrow.save();

    res.status(201).json({ message: "Mượn sách thành công" });
  } catch (error) {
    console.error("Lỗi khi mượn sách:", error);
    res.status(500).json({ message: "Đã xảy ra lỗi khi mượn sách" });
  }
};

module.exports = { getBooks, borrowBook };
