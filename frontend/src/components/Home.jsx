import React, { useLayoutEffect, useRef } from 'react';
import {gsap} from "gsap";

export const Home= ()=>{
    let message= "we update ouselves so that you don't get outdated" ;
    let h1ref= useRef();

    useLayoutEffect(()=>{
        gsap.from(h1ref.current, {
            duration: 0.5,
            scale: 0
        })
        gsap.to(h1ref.current,{
            duration: 1,
            delay: 1,
            scale: 1.1,
            repeat: -1
        })
    })

    return<>
        <div className="home-container" style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1 className='tagLine' ref={h1ref} style={{
                textTransform: "uppercase"
            }}>
                {message}
            </h1>
        </div>
    </>
}

export default Home;