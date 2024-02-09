import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import Comments from "./Comments";
import Voter from "./Voter";
import { formatDate } from "../utils";
import Loading from "./Loading";
import RedSpinner from "./Spinner";
import Card from "react-bootstrap/Card";
import Error from "./Error";

function ArticleItem() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return (
      <>
        <Loading />
        <RedSpinner />
      </>
    );
  }

  if (error !== null) {
    return <Error error={error} />;
  }

  return (
     <>
    <Card>
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>{article.author}</span>
        <span>{formatDate(article.created_at)}</span>
        <span>$topic</span>
        </div>
        </Card.Subtitle>

        {article.article_img_url && (
            <Card.Img
            variant="top"
            src={article.article_img_url}
            alt={article.title}
            />
            )}

  
        <Card.Text>{article.body}</Card.Text>
        <div>
        
        <Voter article_id={article.article_id} votes={article.votes} setArticle={setArticle}/> {article.comment_count} comments
       
        </div>
       

      </Card.Body>
    </Card>

    <section>
        <Comments article={article} />
    </section>
    </>
  );
}

export default ArticleItem;
