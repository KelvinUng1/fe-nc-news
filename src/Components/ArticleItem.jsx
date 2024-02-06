import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { format } from "date-fns";
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
        {" "}
        <Loading />
        <RedSpinner />{" "}
      </>
    );
  }

  if (error !== null) {
    return <Error error={error} />;
  }

  const formattedDate = article.created_at
    ? format(new Date(article.created_at), "dd/MM/yyyy HH:mm")
    : "Invalid Date";

  return (
    <Card>
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {" "}
          {article.author} - {formattedDate}
        </Card.Text>
        {article.article_img_url && (
          <Card.Img
            variant="top"
            src={article.article_img_url}
            alt={article.title}
          />
        )}

        <Card.Text></Card.Text>

        <Card.Text>{article.body}</Card.Text>

        <Card.Text>Votes:{article.votes}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ArticleItem;
