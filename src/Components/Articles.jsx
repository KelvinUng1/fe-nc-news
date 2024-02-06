import {useState, useEffect} from "react"
import { getArticles } from "../api";
import { Card } from "react-bootstrap"
import { format } from 'date-fns';


const Articles = () => {

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    setIsLoading(true)
    getArticles()
    .then ((articles) => {
      setArticles(articles)
      setIsLoading(false)
    })
  },[])

  if (isLoading) return <p>Loading...</p>

  return (
    <section>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <div className="card-container-flex">
        {articles.map((article) => (
          <Card key={article.article_id} className="mb-3">
            <div className="card-content">
              
                <Card.Body className="text-content">
                  <Card.Title  >{article.title}</Card.Title>
                  <Card.Text >{article.author}</Card.Text>
                  <Card.Text>Posted on: {format(new Date(article.created_at), 'dd/MM/yyyy HH:mm')}</Card.Text>
                  <Card.Text>Votes:{article.votes}</Card.Text>
                </Card.Body>
            
              <div className="image-content">
                <Card.Img
                  src={article.article_img_url}
                  alt={`picture for ${article.title}`}
                  className="img-thumbnail"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Articles;

