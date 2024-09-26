import React, { useEffect, useState } from 'react';
import {Header, Footer} from "../components/index";
import { Outlet, useNavigate } from 'react-router-dom';
import { NewsProvider } from '../context/index';
import axios from 'axios';


const Root= ()=>{
    let navigate= useNavigate();
    let [news, setNews]= useState([]);

    let setToken= (token)=>{
        //localStorage.setItem('token', token);
    }

    let authUser= async function(){
        try {
            let res= await axios.post('http://localhost:3000/api/auth', {refreshtoken:localStorage.getItem('refreshtoken')});
            console.log(res.data);
            if(!res.data.success){
                navigate('/login');
            }
        } 
        catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        authUser();
    },[])

    return (
    <NewsProvider value={{news, setNews, setToken}}>
        <Header />
        <Outlet />
        <Footer />
    </NewsProvider>
    )
}

export default Root;