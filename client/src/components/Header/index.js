import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header>
            <nav>
                {Auth.loggedIn() ? (
                    <>
                        <Link to="/dashboard">My Dashboard</Link>
                        <Link to="/" onClick={logout}>Logout</Link>
                    </>
                ) : (
                    <>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </nav>
        </header>
    )
};

export default Header;