import React from "react";
import { Link } from "react-router-dom";

const HomePage = ()  =>{
    return (
        <div>
            <h1> Welcome to Trading Platform</h1>
            <Link to ="/login">Login</Link> | <Link to ="/dashboard">Dashboard</Link>
        </div>
    );
};

export default HomePage;