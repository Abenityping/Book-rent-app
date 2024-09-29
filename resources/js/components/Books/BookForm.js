// BookForm.js
import React, { useState } from 'react';

const BookForm = ({ onBookUpload }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookData = { title, author, quantity, category };
        onBookUpload(bookData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            </div>
            <div>
                <label>Quantity</label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
            </div>
            <div>
                <label>Category</label>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
            </div>
            <button type="submit">Upload Book</button>
        </form>
    );
};

export default BookForm;
