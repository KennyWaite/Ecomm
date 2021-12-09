import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Link to="/home">Home</Link>
            <Link to="/ProductPage">Product Page</Link>
            <Link to="/Cart">Cart</Link>
        </>
    );
};

export default NavBar;
