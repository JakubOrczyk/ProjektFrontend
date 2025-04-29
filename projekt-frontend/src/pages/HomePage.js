import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';


export default function HomePage() {

    const navigate = useNavigate();

const handleLogin = () => {
    navigate('/login');
}

return(
    <div>
        <Navbar handleLogin={handleLogin} />
        <p>Witam to strona główna</p>
    </div>
);

}