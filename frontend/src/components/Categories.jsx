import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "../stylesheets/Categories.css";
import { useNews } from '../context';
//import { useParams } from 'react-router-dom';
import News from '../news/news';

export const Categories= ()=>{
    let {news,setNews}= useNews();
    let [topic, setTopic]= useState("");
    let [totalResults, setTotalResults]= useState(0);
    let totalPages= Math.floor(totalResults/3);
    let [pageno, setPageno]= useState(1);

    useEffect(()=>{
        setNews([]);
        fetch(`https://newsapi.org/v2/everything?q=${topic}&pageSize=3&page=${pageno}&apiKey=d13c430dd3a44a2eae93669d817bf181`)
        .then((res)=>{
            return res.json();
        }).then((result)=>{
            console.log(result);
            setNews(result.articles);
            setTotalResults(result.totalResults);
        })
        setTopic("");
        console.log(subject);
    }, [pageno])

    const searchedTopic= ()=>{
        fetch(`https://newsapi.org/v2/everything?q=${topic}&pageSize=3&page=${pageno}&apiKey=d13c430dd3a44a2eae93669d817bf181`)
        .then((res)=>{
            return res.json();
        }).then((result)=>{
            console.log(result);
            setNews(result.articles);
            setTotalResults(result.totalResults);
        })
        setTopic("");
        console.log(subject);
        if(totalResults>=100){
            setTotalResults(100);
        }
        else{
            setTotalResults(news.length);
        }
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
        </div>

        

        <div className="g-container">

            <div className="btn b">
                <input type="button" value="back" 
                    onClick={()=>{
                        if(pageno===1){
                            setPageno(33);
                        }
                        else{
                            setPageno(totalPages);
                        }
                    }}
                />
            </div>

            <div className="news-content">
                {
                    news.map((curVal, index)=>{
                        return <News key={index} info={curVal} />
                    })
                }
            </div>

            <div className="btn f">
                <input type="button" value="forward" 
                    onClick={()=>{
                        if(pageno===totalPages){
                            setPageno(1);
                        }
                        else{
                            setPageno(pageno+1);
                        }
                    }}
                />
            </div>

        </div>
    </div>
    
    </>
}

export default Categories;