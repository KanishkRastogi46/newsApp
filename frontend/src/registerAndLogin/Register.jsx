import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';


const Register= ()=>{
    let [user, setUser]= useState({username: "", email: "", password: ""});

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
        });
    };

    /*const formSubmit= async(e)=>{
        // e.preventDefault();
        setUser({username: "", email: "", password: ""});

        await fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }).then((res)=>{
            return res.json();
        }).then((result)=>{
            console.log(result);
        })
    };*/

    return (
        <>
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1vmax"
        }}>
            <h1>Register</h1>

            <form 
                action='/api/register'
                //onSubmit={(e)=>formSubmit(e)} 
                method="post" 
                style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem", width: "400"}}
            >

                <div  style={{display: "flex", gap: "10px"}}>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        value={user.username} 
                        placeholder="Enter username"
                        onChange={(e)=>enterData(e)}
                    />
                </div>  

                <div  style={{display: "flex", gap: "10px"}}>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Enter email"
                        onChange={(e)=>enterData(e)}
                    />
                </div> 

                <div  style={{display: "flex", gap: "10px"}}>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Enter password"
                        onChange={(e)=>enterData(e)}
                    />
                </div>  

                <input type="submit" value="register" style={{width: "10vw"}} />

            </form>
        </div>
    </>
    )
}

export default Register;