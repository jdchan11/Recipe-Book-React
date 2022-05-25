import React, { useState } from 'react';
import logo from '../components/images/logo_recipes.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import ariaExpanded from 'react-bootstrap'

export const Navbar = () => {
    const [isNavCollapsed, setisNavCollapsed] = useState(true)
    const handleClick = () => {
        setisNavCollapsed(!isNavCollapsed);   
    }
    return (
        <>
        <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-dark navbar-right" style={{backgroundColor: '#3A0066'}}>
            <div className="container">
                <a href='/'>
                    <img src={logo} className='navbar-brand' alt="" />
                </a>
                <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navmenu"
                        aria-expanded={!isNavCollapsed ? true : false}
                        onClick={handleClick}>
                <span className="navbar-toggler-icon"></span></button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item" >
                            <a href="/recipes" className="nav-link" style={{color: '#00CCCC'}}>My Recipes</a>
                        </li>
                        <li className="nav-item">
                            <a href="/search" className="nav-link" style={{color: '#00CCCC'}}>Search</a>
                        </li>
                        <li className="nav-item">
                            <a href="/signin" className="nav-link" style={{color: '#00CCCC'}}>Sign In</a>
                        </li>
                        <li className="nav-item">
                            <a href="/signup" className="nav-link" style={{color: '#00CCCC'}}>Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
