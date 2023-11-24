import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "../stylesheets/Categories.css";
import { useNews } from '../context';
//import { useParams } from 'react-router-dom';
import News from '../news/news';

export const Categories= ()=>{
    let {news,setNews}= useNews();
    let [topic, setTopic]= useState("");

    const searchedTopic= ()=>{
        fetch(`https://newsapi.org/v2/everything?q=${topic}&pageSize=3&apiKey=d13c430dd3a44a2eae93669d817bf181`)
        .then((res)=>{
            return res.json();
        }).then((result)=>{
            console.log(result);
            setNews(result);
        })
        setTopic("");
        console.log(subject);
    }

    const search= (e)=>{
        setTopic(e.target.value);
    }

    return <>
    <div className='container'>
        <div className="categories-container">
            <div className='searchField'>
                <input type="text" name="topic" id="topic" value={topic} onChange={search} placeholder="Search for Topics.." />
                <button value={""} onClick={searchedTopic}>
                    <SearchIcon/>
                </button>
            </div>
            <div className="g*-container">

            <div className="btn b">
                <input type="button" value="back" />
            </div>

            <div className="news-content">
                {
                    news.map((curVal, index)=>{
                        return <News key={index} info={curVal} />
                    })
                }
            </div>

            <div className="btn f">
                <input type="button" value="forward" />
            </div>

        </div>
        </div>
        </div>
    </>
}

export default Categories;