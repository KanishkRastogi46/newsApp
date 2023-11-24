import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNews } from '../context';
import News from '../news/news';

export const Subject= ()=>{
    let {news ,setNews}= useNews();
    let { subject } = useParams();
    
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/everything?q=${subject}&pageSize=3&apiKey=d13c430dd3a44a2eae93669d817bf181`)
        .then((res)=>{
            return res.json();
        }).then((result)=>{
            console.log(result.totalResults);
            console.log(result.articles);
            setNews(result.articles);
        })
        
    }, [])
    
    return <>
        <div className="general-container">

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
    </>
}