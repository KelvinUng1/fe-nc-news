import axios from "axios";

export const getArticles = ()=>{
    return axios
    .get("https://newsapp-aifw.onrender.com/api/articles")
    .then(({data}) => {
        console.log(data)
        return data.articles
    })
}