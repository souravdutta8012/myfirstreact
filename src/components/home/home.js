import './home.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <nav>
                <ul className="navlinks">
                    <Link to='/ArrayStateHook'>
                        <li>ArrayStateHook</li>
                    </Link>
                    <Link to='/CounterHook'>
                        <li>CounterHook</li>
                    </Link>
                    <Link to='/ObjectStateHook'>
                        <li>ObjectStateHook</li>
                    </Link>
                    <Link to='/DataFetch'>
                        <li>DataFetch</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Home;