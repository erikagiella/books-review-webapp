const connection = require("../database/connection");

const index = (req, res) => {

    // make the database query to fetch all books
    const sql = "SELECT * FROM books";
    // perform the query using the connection object
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching books:", err);
            return res.status(500).json({ error: true, message: "Internal Server Error" });
        }
        res.json(results);

    });
}


const show = (req, res) => {
    const id = parseInt(req.params.id);

    // make the database query to fetch a single book by ID
    const sql = "SELECT * FROM books WHERE id = ?";
    // make the second query to fetch the reviews for the book
    const reviewsSql = "SELECT id, review, rating, username FROM reviews WHERE book_id = ?";

    // perform the first query using the connection object
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error("Error fetching book:", err);
            return res.status(500).json({ error: true, message: "Internal Server Error" });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: true, message: "Book not found" });
        }

        const book = results[0];

        // perform the second query to fetch the reviews for the book
        connection.query(reviewsSql, [id], (err, reviews) => {
            if (err) {
                console.error("Error fetching reviews:", err);
                return res.status(500).json({ error: true, message: "Internal Server Error" });
            }

            book.reviews = reviews;
            res.json(book);
        });
    });
}



module.exports = {
    index,
    show,
};