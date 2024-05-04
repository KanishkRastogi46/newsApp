import React, { useLayoutEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import "../stylesheets/Header.css";
import { gsap } from 'gsap/gsap-core';
import axios from 'axios';

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

    let logout= async function(){
        let res= await axios.get('http://localhost:3000/api/logout');
        if(res.data.success){
            navigate('/login');
        }
    }

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
            
            <div className='logout'>
                <input type="submit" value="LOGOUT" id="out" style={{backgroundColor: 'red'}} onClick={logout}/>
            </div>
        </div>
    </>
}

export default Header;