import React, { useState } from "react";
import axios from "axios";
import './OwnerSinup.css';

const OwnerSignup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        location: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post('/api/register', {
                email: formData.email,
                password: formData.password,
                location: formData.location,
                phone_number: formData.phoneNumber,
                role: 'owner', // Ensure you're registering as an owner
            });

            alert("Signup successful!");
        } catch (error) {
            console.error(error);
            alert("Signup failed!");
        }
    };

    return (
        <div>
            <h2>Book Rent</h2>
            <H3>SignUp Us Owner</H3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email Address:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <label>
                        <input
                            type="checkbox"
                            name="remember"
                            checked={formData.remember}
                            onChange={handleChange}
                        />
                        I Accept The Term And Conditions
                    </label>

                <button type="submit">Sign Up</button>

                <h3>Already an account? <a> Login</a></h3>
            </form>
        </div>
    );
};

export default OwnerSignup;
