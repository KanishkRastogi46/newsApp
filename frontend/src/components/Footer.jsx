import React from 'react';
import "../stylesheets/Footer.css";

export const Footer= ()=>{
    let date= new Date();
    let year= date.getFullYear();

    return <>
        <div className="footer-container">
            <div className="content">
                <span>	&#169; </span>
                <span> {year} </span>
            </div>
        </div>
    </>
}

export default Footer;