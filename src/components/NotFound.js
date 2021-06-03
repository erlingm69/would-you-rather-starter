import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="center">
            <h1>404 - Sorry couldn't find that!</h1>
            <Link className="btn" to="/">Go To Home</Link>
        </div>
    )
}
