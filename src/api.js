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

export const getArticleById = (article_id) => {
    return newsApi
    .get(`/articles/${article_id}`)
    .then(({data})=> {
        return data.article
    })
    }

export const getComments = (article_id) => {
    return newsApi
    .get(`articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};   
