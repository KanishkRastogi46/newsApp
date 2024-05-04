import React, { useState } from 'react';
//import { useNews } from '../context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login= ()=>{
    let navigate= useNavigate();
    //let {setToken}= useNews();

    let [user, setUser]= useState({username: "", password: ""});

    const enterData= (e)=>{
        setUser((previous)=>{
            let {name, value}= e.target;
            if(name==="username") {
                return {...previous, username: value}
            }
            else if(name==="password") {
                return {...previous, password: value}
            }
        });
    };

    const formSubmit= async(e)=>{
        try{
            const login_res= await axios.post("http://localhost:3000/api/login", user);
            console.log(login_res.data);
            if(login_res.data.success){
                setUser({username: '', password: ''});
                navigate('/');
        }
      }catch(err){
        console.log(err);
      }
    };

    return (
        <>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1vmax",
            height: "100%",
            backgroundColor: "gray",
            color: "whitesmoke"
        }}>
            <div style={{display: "flex", flexDirection: "column", gap: "2vh", backgroundColor: "black"}}>
                <h1 style={{textAlign: "center", fontSize: "3rem"}}>Login</h1>

                <div
                    style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", width: 400, height: 200, backgroundColor: "black"}}
                >

                    <div  style={{display: "flex", gap: "10px"}}>
                        <label htmlFor="username" style={{fontWeight: "bold", fontSize: "1.5rem"}}>Username:</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder="Enter username"
                            onChange={(e)=>enterData(e)}
                            style={{width: "80%", height: "1.5rem", borderRadius: 0, backgroundColor: "white"}}
                        />
                    </div>    
                    
                    <div  style={{display: "flex", gap: "10px"}}>
                        <label htmlFor="password" style={{fontWeight: "bold", fontSize: "1.5rem"}}>Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Enter password"
                            onChange={(e)=>enterData(e)}
                            style={{width: "80%", height: "1.5rem", borderRadius: 0, backgroundColor: "white"}}
                        />
                    </div>  

                    <input type="submit" value="login" style={{backgroundColor: 'red', border: "1px solid black", borderRadius: "40px", width: "5rem", height: "1.5rem", margin:"1rem"}} onClick={(e)=>formSubmit(e)}/>

                </div>
            </div>
        </div>
        </>
    )
}

export default Login;