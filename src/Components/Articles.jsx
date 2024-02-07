import { useState, useEffect } from "react";
import { getArticles } from "../api";
import { Card } from "react-bootstrap";
import { formatDate } from "../utils";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import RedSpinner from "./Spinner";
import Error from "./Error";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <>
        <Loading />
        <RedSpinner />
      </>
    );

  if (error !== null) {
    return <Error error={error} />;
  }
  return (
    <section>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <div className="card-container">
        {articles.map((article) => (
          <Link to={`/articles/${article.article_id}`} key={article.article_id}>
            <Card key={article.article_id} className="mb-3">
              <div className="row g-0">
                <div className="col-md-8">
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text className="author">{article.author}</Card.Text>
                    <Card.Text>
                      Posted on: {formatDate(article.created_at)}
                    </Card.Text>
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
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Articles;
