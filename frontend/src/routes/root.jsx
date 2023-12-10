import React, { useState } from 'react';
import {Header, Footer} from "../components/index";
import { Outlet } from 'react-router-dom';
import { NewsProvider } from '../context/index';


const Root= ()=>{
    let [news, setNews]= useState([]);

    let setToken= (token)=>{
        localStorage.setItem('token', token);
    }

    return (
    <NewsProvider value={{news, setNews, setToken}}>
        <Header />
        <Outlet />
        <Footer />
    </NewsProvider>
    )
}

export default Root;