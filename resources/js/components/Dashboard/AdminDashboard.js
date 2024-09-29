// AdminDashboard.js

import './AdminDashboard.css';
import React, { useState, useEffect } from 'react';
import OwnerList from '../Admin/OwnerList';
import BookList from '../Books/BookList';
import axios from 'axios';

const AdminDashboard = () => {
    const [owners, setOwners] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchOwners();
        fetchBooks();
    }, []);

    const fetchOwners = async () => {
        try {
            const response = await axios.get('/api/admin/owners');
            setOwners(response.data);
        } catch (error) {
            console.error("Error fetching owners", error);
        }
    };

    const fetchBooks = async () => {
        try {
            const response = await axios.get('/api/admin/books');
            setBooks(response.data);
        } catch (error) {
            console.error("Error fetching books", error);
        }
    };

    const handleApproveOwner = async (ownerId) => {
        try {
            await axios.post(`/api/admin/owners/${ownerId}/approve`);
            fetchOwners(); // Refresh the list of owners
        } catch (error) {
            console.error("Error approving owner", error);
        }
    };

    const handleApproveBook = async (bookId) => {
        try {
            await axios.post(`/api/admin/books/${bookId}/approve`);
            fetchBooks(); // Refresh the list of books
        } catch (error) {
            console.error("Error approving book", error);
        }
    };

    return (

    <div className="body">


        <div className="side-bar">
                <div className="box-1">Book Rent</div>

          <div className="box-2">
            <h2>Dashboard</h2>
                <h2>Owners</h2>
                <OwnerList owners={owners} onApproveOwner={handleApproveOwner} />

                <h2>Books</h2>
                <BookList books={books} onApproveBook={handleApproveBook} />

                <h2>others</h2>
                <h2>others</h2>
          </div>

          <div className="box-3">
          <h2>Notification</h2>
          <h2>Setting</h2>
          <h2>Login Us Owner</h2>
          </div>

        </div>

         <div className="content">

                <div className="admin">
                    <h1>Admin/Dashboard</h1>
                </div>

                <div className="statics">
                    <h1>This Month Statistics</h1>
                    <p></p>

                    <div className="income"></div>

                    <div className="Available"></div>

                </div>

                <div className="book-status">

                </div>

                <div className="earning"></div>

            </div>
     </div>
    );
};

export default AdminDashboard;
