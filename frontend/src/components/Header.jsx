import React, { useLayoutEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import "../stylesheets/Header.css";
import { gsap } from 'gsap/gsap-core';

export const Header= ()=>{
    let linkRef= useRef();
    useLayoutEffect(()=>{
        gsap.from(linkRef.current, {
            duration: 1,
            y: -100
        })
        gsap.to(linkRef.current, {
            duration: 1,
            y: 0
        })
    })
    return <>
        <div className="header-container" ref={linkRef}>

            <div className="links" >
                <NavLink 
                    to='/'
                    className={({isActive})=>
                    `${isActive ? 'text-blue' : 'text-grey'} size-3rem`
                }
                    title='Home Page'  
                >
                    <HomeIcon/>
                </NavLink>
            
                <NavLink 
                    to='/general'
                    className={({isActive})=>
                    `${isActive ? 'text-blue' : 'text-grey'} font-2rem`
                }
                    title='General'
                >
                    GENERAL
                </NavLink>
            
                <NavLink 
                    to='/categories'
                    className={({isActive})=>
                    `${isActive ? 'text-blue' : 'text-grey'} font-2rem`
                }
                    title='Categories'
                >
                    CATEGORIES
                </NavLink>
            </div>
            
            <form method='get' action='/api/logout' className='logout'>
                <input type="submit" value="LOGOUT" style={{background: 'none'}}/>
            </form>
        </div>
    </>
}

export default Header;