import React from 'react';

export default function Navbar ({handleLogin}) {

return (
    <div id='menu'>
        <div id='mainLeft'>
            <p id='logo'>Bellaklik</p>
            <ul>
                <li><a>Zakłady</a></li>
                <li><a>Na żywo</a></li>
                <li><a>Misje</a></li>
                <li><a>Gry Karciane</a></li>
                <li><a>Promocje</a></li>
            </ul>
        </div>
        <div id='mainRight'>
            <button id='signup'>Zarejestruj się</button>
            <button id='login' onClick={handleLogin}>Zaloguj</button>
        </div>
    </div>
);

};