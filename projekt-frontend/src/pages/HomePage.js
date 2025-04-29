import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AsideLeft from '../components/AsideLeft'
import RightPane from '../components/RightPane'
import ContentScroller from '../components/ContentScroller'


export default function HomePage() {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <div>
            <Navbar handleLogin={handleLogin} />
            <div style={{display: 'flex', flexDirection: 'row'}}>

            <AsideLeft />
            <ContentScroller />
            <RightPane />
            </div>
        </div>
    );

}