import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function Books() {

    const [books, setBooks] = useState([]);
    const url = 'http://localhost:3000/api/v1/books';

    function fetchBooks(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error(error));
    }


    useEffect(() => {
        fetchBooks(url);
    }, []);

    return (
        <>
            {/* Jumbotron */}
            <section className="jumbotron">
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Books reviews community</h1>
                        <p className="col-md-8 fs-4">
                            We are a community of book lovers who share their reviews and recommendations. Join us to discover new books and connect with fellow readers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Books List */}

            <section className="books-list py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {books.map((book) => (
                            <div className="col" key={book.id}>
                                <div className="card h-100">
                                    <img src={book.cover_image || `https://placehold.co/600x400?text=${book.title}`} alt={book.title} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{book.title}</h5>
                                        <p className="card-text">{book.description}</p>
                                        <Link to={`/books/${book.id}`} className="btn btn-primary">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </section>


        </>
    )
}

