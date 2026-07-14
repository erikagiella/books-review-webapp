export default function AppFooter() {



    return (
        <footer className="bg-light py-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                    <div className="col">
                        <h3>Books Reviews</h3>
                        <p>Your go-to platform for honest and insightful book reviews.</p>
                    </div>
                    <div className="col">
                        <h3>Quick Links</h3>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Books</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Contact Us</h3>
                        <p>Email: info@booksreviews.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}