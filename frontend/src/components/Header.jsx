import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import "../stylesheets/Header.css";
import { gsap } from 'gsap/gsap-core';

export const Header= ()=>{

    return <>
        <div className="header-container">

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

        </div>
    </>
}

export default Header;