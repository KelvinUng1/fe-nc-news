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
    .then((data) => {
        return data.data.users
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

  export const postComment = (article_id, comment) => {
    console.log("article id>>", article_id);
    console.log("comment>>>>>>>>>", comment);
  
    return newsApi
      .post(`/articles/${article_id}/comments`, comment)
      .then(({ data }) => {
        console.log("postComment successful:", data);
        return data.newComment;
      })
      .catch((error) => {
        console.log("postComment error:", error);
        throw error;
      });
  };

  export const getUserByUsername = (username)=>{
    return api
    .get(`/users/${username}`)
    .then((data) => {
        return data.data.user
    })
    .catch((err)=>{
        console.log(err)
    })
}