import {useState, useEffect} from "react"
import { getArticles } from "../api";
import { Card } from "react-bootstrap"
import { format } from 'date-fns';
import Loading from "./Loading";
import RedSpinner from "./Spinner";

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

  if (isLoading) return ( 
  <>  
  <Loading />
  <RedSpinner /> 

  </>
  )

  return (
    <section>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
  
      <div className="card-container">
        {articles.map((article) => (
          <Card key={article.article_id} className="mb-3">
            <div className="row g-0">
              <div className="col-md-8">
                <Card.Body>
                  <Card.Title >{article.title}</Card.Title>
                  <Card.Text className="author">{article.author}</Card.Text>
                  <Card.Text>Posted on: {format(new Date(article.created_at), 'dd/MM/yyyy HH:mm')}</Card.Text>
                  <Card.Text>Votes:{article.votes}</Card.Text>
                </Card.Body>
              </div>
              <div className="col-md-4">
                <Card.Img
                  src={article.article_img_url}
                  alt={`picture for ${article.title}`}
                  className="img-thumbnail float-right" 
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
