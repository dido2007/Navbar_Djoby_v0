// Navbar.js
import React from 'react';
import BoutonMap from '../assets/images/Bouton Map.svg'
import BoutonMessage from '../assets/images/Bouton Message.svg'
import BoutonNotif from '../assets/images/Bouton Notification.svg'
import BoutonProfile from '../assets/images/Bouton Profile.svg'
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="icon-container">
                    <img src={BoutonMap} alt="Icône de carte" className="icon"/>
                </div>
                <div className="icon-container">
                    <img src={BoutonMessage} alt="Icône de chat" className="icon"/>
                </div>
                <div className="icon-container">
                    <img src={BoutonNotif} alt="Icône de notification" className="icon"/>
                </div>
                <span className="app-name">Djobi</span>
            </div>
            <div className="navbar-right">
                <button className="announcement-btn">Ajouter une annonce</button>
                <div className="icon-container">
                    <img src={BoutonProfile} alt="Icône de profile" className="icon"/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
