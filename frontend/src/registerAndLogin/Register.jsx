import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Register= ()=>{
    let navigate= useNavigate();
    let [user, setUser]= useState({username: "", email: "", password: "", confirmPassword: ""});

    const enterData= (e)=>{
        setUser((previous)=>{
            let {name, value}= e.target;
            if(name==="username") {
                return {...previous, username: value}
            }
            else if(name==="email") {
                return {...previous, email: value}
            }
            else if(name==="password") {
                return {...previous, password: value}
            }
            else if(name==="confirmPassword") {
                return {...previous, confirmPassword: value}
            }
        });
    };

    const formSubmit= async(e)=>{
        let res= await axios.post('http://localhost:3000/api/register', user);
        console.log(res.data);
        if(res.data.success){
            setUser({username: "", email: "", password: "", confirmPassword: ""});
            navigate('/login');
        }else{
            setUser({username: "", email: "", password: "", confirmPassword: ""});
            navigate('/register')
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
            <div style={{display: "flex", flexDirection: "column", gap: "3vh", backgroundColor: "black"}}>
                <h1 style={{textAlign: "center", fontSize: "3rem"}}>Register</h1>

                <div
                    style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", width: 500, height: 250, backgroundColor: "black"}}
                >

                    <div  style={{display: "flex", gap: "10px"}}>
                        <label htmlFor="username" style={{fontWeight: "bold", fontSize: "1.5rem"}}>Username:</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            value={user.username} 
                            placeholder="Enter username"
                            onChange={(e)=>enterData(e)}
                            style={{width: "80%", height: "1.5rem", borderRadius: 0, backgroundColor: "white"}}
                        />
                    </div>  

                    <div  style={{display: "flex", gap: "10px"}}>
                        <label htmlFor="email" style={{fontWeight: "bold", fontSize: "1.5rem"}}>Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Enter email"
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

                    <div  style={{display: "flex", gap: "10px"}}>
                        <label htmlFor="password" style={{fontWeight: "bold", fontSize: "1.5rem"}}>Confirm Password:</label>
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            id="confirmPassword" 
                            placeholder="Confirm password"
                            onChange={(e)=>enterData(e)}
                            style={{width: "80%", height: "1.5rem", borderRadius: 0, backgroundColor: "white"}}
                        />
                    </div>  

                    <input type="submit" value="register" style={{backgroundColor: 'red', border: "1px solid black", borderRadius: "40px", width: "5rem", height: "1.5rem", margin:"1rem"}} onClick={(e)=>formSubmit(e)}/>

                </div>
            </div>
        </div>
    </>
    )
}

export default Register;