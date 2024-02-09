import { useEffect, useState } from "react";
import { getComments } from "../api";
import { useParams } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { formatDate } from "../utils";
import Loading from "./Loading";
import RedSpinner from "./Spinner";
import { HandThumbsUp, HandThumbsDown } from "react-bootstrap-icons";
import { PostComment } from "./PostComment";


function Comments() {
    const [comments, setComments] = useState([]);
    const { article_id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      getComments(article_id)
      .then((comments) => {
        setComments(comments);
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

    const handleCommentPosted = (newComment) => {
      setComments((prevComments) => [newComment, ...prevComments]);
    };
    return (
      <>
        <section style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <PostComment article_id={article_id} onCommentPosted={handleCommentPosted} comments={comments} setComments={setComments} />
          <h2 className="mb-3 fs-5">Comments:</h2>
          
          <ListGroup>
            {comments.map((comment) => (
              <ListGroup.Item key={comment.comment_id} className="mb-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', fontSize:"smaller"}}>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h5 className="mb-1 text-danger fs-6">{comment.author }</h5>
                <p style={{ textAlign: 'right' }}>{formatDate(comment.created_at)}</p>
                </div>

                <p className="mb-0">{comment.body}</p> 
                <br></br>
                <HandThumbsUp /> {comment.votes}  {" "} <HandThumbsDown /> 
              </ListGroup.Item>
            ))}
          </ListGroup>
        </section>
        </>
      );
    }
  
  export default Comments;