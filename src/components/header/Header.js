import React from 'react'
import Toggle from '../toggle/Toggle';
import "./Header.css";
const Header = () => {
    return (
        <div className="h-wrapper">
            <div className="h-left">
                <div className="h-name">Hassan</div>
                <Toggle/>

            </div>
            <div className="h-right">
                <div className="h-list">
                    <ul style={{listStyleType:"none"}}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
            </div>
                <button className="button">
                    Contact us
                </button>
        </div>
    )
}

export default Header;
