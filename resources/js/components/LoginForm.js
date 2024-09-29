import React, { useState } from "react";
import axios from "axios";
import ('./LoginForm.css');
const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/login', {
                email: formData.email,
                password: formData.password,
                remember: formData.remember,
            });

            // Handle login success, e.g., redirect or save token
            alert("Login successful!");
        } catch (error) {
            console.error(error);
            alert("Login failed!");
        }
    };

    return (
        <div>
            <h2> Book Rent</h2>
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
                    <label>
                        <input
                            type="checkbox"
                            name="remember"
                            checked={formData.remember}
                            onChange={handleChange}
                        />
                        Remember Me
                    </label>
                </div>

                <button type="submit">Login</button>

                <h3>Have no an account? <a>Sign Up</a></h3>
            </form>
        </div>
    );
};

export default LoginForm;
