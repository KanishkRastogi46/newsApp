import React from 'react';
import { NavLink } from 'react-router-dom';

export const Home= ()=>{

    return<>
        <div className="home-container" style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0vw"
        }}>

            <div className="tagline" style={{
                width: "50vw",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#e8e5e1",
                boxShadow: "0px 5px 5px #e5e4e1",
                fontFamily: "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
            }}>
                <div className="text">
                    <h1 style={{textTransform: "uppercase", background: '-webkit-linear-gradient(60deg, #E21143, #FFB03A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>we stay updated</h1>
                    <h1 style={{textTransform: "uppercase", background: '-webkit-linear-gradient(60deg, #E21143, #FFB03A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>so that you</h1>
                    <h1 style={{textTransform: "uppercase", background: '-webkit-linear-gradient(60deg, #E21143, #FFB03A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>don't get dated</h1>
                </div>
                
                <NavLink 
                    to='/general'
                    style={{
                        width: "20%",
                        height: "10%",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: "2rem",
                        borderRadius: "10px",
                        fontSize: "large",
                        backgroundColor: "crimson",
                        textDecoration: "none",
                        color: 'black',
                        fontWeight: 'bolder'
                    }}
                >
                    EXPLORE
    
                </NavLink>
                
            </div>
            
            <div className="image" style={{height: "80vh", width: "50vw"}}>
                <img src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG5ld3MlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="homeImg" style={{height: "80vh", width: "50vw"}}/>
            </div>
        </div>
    </>
}

export default Home;