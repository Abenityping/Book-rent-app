// BookList.js
import React from 'react';

const BookList = ({ books, onApproveBook }) => {
    return (
        <div>
            {books.map(book => (
                <div key={book.id}>
                    <h3>{book.title}</h3>
                    <p>Author: {book.author}</p>
                    <p>Quantity: {book.quantity}</p>
                    {onApproveBook && <button onClick={() => onApproveBook(book.id)}>Approve</button>}
                </div>
            ))}
        </div>
    );
};

export default BookList;
