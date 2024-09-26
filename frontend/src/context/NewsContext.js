import { createContext, useContext } from "react";

export const NewsContext= createContext({
    news: [{
        title: "",
        description: "",
        newsUrl: "",
        imageUrl: ""
    }],
    setNews: ()=>{},
    setToken: ()=>{}
})

export const NewsProvider= NewsContext.Provider;

export const useNews= ()=>{
    return useContext(NewsContext);
}