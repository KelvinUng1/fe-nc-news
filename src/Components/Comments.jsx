import { useEffect, useState } from "react";
import { getComments } from "../api";
import { useParams } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { formatDate } from "../utils";
function Comments() {
    const [comments, setComments] = useState([]);
    const { article_id } = useParams();
  
    useEffect(() => {
      getComments(article_id)
      .then((comments) => {
        setComments(comments);
      });
    }, [article_id]);
  
    return (
        <section style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2 className="mb-3 fs-5">Comments:</h2>
          <ListGroup>
            {comments.map((comment) => (
              <ListGroup.Item key={comment.comment_id} className="mb-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', fontSize:"smaller"}}>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h5 className="mb-1 text-danger fs-6">{comment.author}</h5>
                <p style={{ textAlign: 'right' }}>{formatDate(comment.created_at)}</p>
                </div>

                <p className="mb-0">{comment.body}</p> 
                <br></br>
                <p>votes: {comment.votes} upvote:downvote</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </section>
      );
    }
  
  export default Comments;