import React, { useLayoutEffect } from 'react';
import "../stylesheets/Footer.css";
import gsap from 'gsap';

export const Footer= ()=>{
    let date= new Date();
    let year= date.getFullYear();
    let footRef= React.useRef();

    useLayoutEffect(()=>{
        gsap.from(footRef.current, {
            duration: 1,
            y: 100
        })
        gsap.to(footRef.current, {
            duration: 1,
            y: 0
        })
    })
    return <>
        <div className="footer-container">
            <div className="content" ref={footRef}>
                <span>	&#169; </span>
                <span> {year} </span>
            </div>
        </div>
    </>
}

export default Footer;