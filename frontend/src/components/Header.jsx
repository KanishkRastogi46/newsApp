import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import "../stylesheets/Header.css";
import axios from 'axios';

export const Header= ()=>{
    let navigate = useNavigate();

    let logout= async function(){
        let refreshtoken = localStorage.getItem('refreshtoken');
        localStorage.removeItem('refreshtoken');
        let res= await axios.post('http://localhost:3000/api/logout', {refreshtoken});
        console.log(res.data);
        if(res.data.success){
            navigate('/login');
        }else localStorage.getItem('refreshtoken', refreshtoken);
    }

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
            
            <div className='logout'>
                <input type="submit" value="LOGOUT" id="out" style={{backgroundColor: 'red'}} onClick={logout}/>
            </div>
        </div>
    </>
}

export default Header;