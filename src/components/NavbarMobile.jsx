import React from 'react';
import {CgProfile} from "react-icons/cg"
import './Bottombar.css';
import './NavbarMobile.css';

function NavbarMobile() {
    return (
        <div className="navbar-mobile">
            <div className="navbar-mobile-left">
                <span className="icon">+</span> {/* Icône d'ajout */}
            </div>
            <span className="app-name-mobile">Djobi</span>
            <div className="navbar-mobile-right">
                <div className="icon-container">
                    <CgProfile className="icon-navbar-mobile" size="2em" color='black' aria-label="Icône de profil" />
                </div>
            </div>
        </div>
    );
}

export default NavbarMobile;
