// BottomBar.js
import React from 'react';
import BoutonMap from '../assets/images/Bouton Map.svg'
import BoutonMessage from '../assets/images/Bouton Message.svg'
import BoutonNotif from '../assets/images/Bouton Notification.svg'
import BoutonProfile from '../assets/images/Bouton Profile.svg'
import './Bottombar.css';

function BottomBar() {
    return (
        <div className="bottom-bar">
            <div className="icon-container">
                <img src={BoutonMap} alt="Icône de carte" className="icon"/>
            </div>
            <div className="icon-container">
             <img src={BoutonMessage} alt="Icône de chat" className="icon"/>
            </div>
            <div className="icon-container">
                 <img src={BoutonNotif} alt="Icône de notification" className="icon"/>
            </div>
        </div>
    );
}


export default BottomBar;
