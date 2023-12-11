import React, { useEffect, useState } from 'react';
import { useNews } from '../context';
import News from '../news/news';
import "../stylesheets/General.css";

export const General= ()=>{
    let {news, setNews}= useNews();
    let [totalResults, setTotalResults]= useState(0);
    let [pageno, setPageno]= useState(1);

    useEffect(()=>{
        fetch(`https://newsapi.org/v2/everything?q=keyword&pageSize=3&page=${pageno}&apiKey=d13c430dd3a44a2eae93669d817bf181`).
        then((res)=>{
            return res.json();
        }).then((result)=>{
            console.log(result.articles, result.totalResults);
            setNews(result.articles);
            setTotalResults(result.articles.length);
        })
    }, [pageno])


    return<>
        <div className="general-container">

            <div className="btn b" >
                <input 
                    type="button" 
                    value="back" 
                    onClick={()=>{
                        if(pageno===1){
                            setPageno(33);
                        }
                        else{
                            setPageno(pageno-1);
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
                <input 
                    type="button" 
                    value="forward" 
                    onClick={()=>{
                        if(pageno===33){
                            setPageno(1);
                        }
                        else{
                            setPageno(pageno+1);
                        }
                    }}
                />
            </div>

        </div>
    </>
}

export default General;