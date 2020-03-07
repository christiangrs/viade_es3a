import React from 'react';
import './NavBar.css'
import {
    LogoutButton
  } from '@inrupt/solid-react-components';

const NavBar = () => {
    return (
        <header className="navBar">
            <nav className="navBar_nav">
                <div className="navBarLogo">
                <img src={require('/img/logo_viade_es3a.jpg')} alt="React logo" width="62" />
                </div>
                <div className="spaceOptions"></div>
                <div className="navBarOptions">
                    <ul>
                        <li>
                            <a href="/addRoute">Add route</a>
                        </li>
                        <li>
                            <a href="/loadRoute">Load route</a>
                        </li>
                        <li>
                            <a href="/profile">Profile</a>
                        </li>
                        <li>
                            <a href="/friends">Friends</a>
                        </li>
                    </ul>
                </div>
                <div className="spaceLogout"></div>
                <div className="navBarLogout">
                    <LogoutButton/>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;