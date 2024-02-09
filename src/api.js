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
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};   

export const getUsers = () => {
    return newsApi
    .get('/users')
    .then(({data}) => {
        return data.users
    })
}

export const patchArticleVotes = (article_id, votes) => {
    return newsApi
    .patch(`/articles/${article_id}`,
      { inc_votes: votes}
    )
    .then((data) => {
        return data.data.votes
    })
  };

  export const postArticleComment = (comment, article_id ) => {
    return newsApi
      .post(`/articles/${article_id}/comments`, comment)
      .then(({ data }) => {
        return data.comment;
      })
    }

  export const getUserByUsername = (username)=>{
    return api
    .get(`/users/${username}`)
    .then(({data}) => {
        return data.user
    })
    .catch((err)=>{
        console.log(err)
    })
}