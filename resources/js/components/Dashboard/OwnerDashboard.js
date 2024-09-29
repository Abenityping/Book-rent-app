// OwnerDashboard.js
import './OwnerDashboard.css';
import React,{useState, useEffect} from "react";
import BookForm from '../Books/BookForm';
import BookList from '../Books/BookList';
import axios from "axios";

const OwnerDashboard = () => {
    const [books, setBooks] = useState([]);
    const [revenue, setRevenue] = useState(0);

    useEffect(() => {
        fetchBooks();
        fetchRevenue();
    }, []);

    const fetchBooks = async () => {
        try{
            const response = await axios.get('/api/owner/books');
            setBooks(response.data);

        } catch (error) {
            console.error ("Error fetching books", error);

        }

    };

    const handleBookUpload = async (bookData) => {
        try {
            await axios.post('/api/owner/books', booksData);
            fetchBooks(); // Refresh the list of books

        } catch (error) {
            console.error("Error uploading book", error);

        }
    };

    return (
        <div>
            <h1>Owner Dashboard</h1>

            <div className="revenue-section">
                <h2>Your Revenue</h2>
                <p>${revenue}</p>
            </div>

            <div className="book-management">
                <h2>Upload a New Book</h2>
                <BookList onBookUpload={handleBookUpload} />

                <h2>Your Uploaded Books</h2>
                <BookList books={books} />
            </div>
        </div>
    );

};

export default OwnerDashboard;
