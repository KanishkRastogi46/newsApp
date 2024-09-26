import React from 'react';
import { Link } from 'react-router-dom';
import "./news.css";

const News= ({key, info})=>{
    return(
        <>
            <div className="news-container" id={key}>

                <div className="title">
                    <h3>{info.title}</h3>
                </div>
                <div className="image">
                    <Link to={info.url}>
                        <img src={info.urlToImage} alt="newsImg"/>
                    </Link>
                </div>
                <div className="description">
                    <p>{info.description}</p>
                </div>
            
            </div>
        </>
    )
}

export default News;