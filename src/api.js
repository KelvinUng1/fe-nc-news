import axios from "axios";

const newsApi = axios.create({
    baseURL:'https://newsapp-aifw.onrender.com/api'
})
export const getArticles = ()=>{
    return newsApi
    .get("/articles")
    .then(({data}) => {
        return data.articles
    })
    
}