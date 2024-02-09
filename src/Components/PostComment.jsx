import { useState, useContext } from "react";
import { postComment } from "../api";
import { UserContext } from "./contexts/UserContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import RedSpinner from "./Spinner";

export const PostComment = ({ article_id, onCommentPosted }) => {
  const [postedComment, setPostedComment] = useState("");
  const [text, setText] = useState("");
  const { user, setUser } = useContext(UserContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [comments, setComments] = useState([]);

  const handlePostComment = (event) => {
    event.preventDefault();
    if (user && text.trim() !== "") {
      setIsSubmitting(true);

      postComment(
        article_id,
        { body: text, username: user.username }
      )
        .then((newComment) => {
          console.log("postComment response:", newComment);
          setComments((prevComments) => [newComment, ...prevComments ]);

          setPostedComment(newComment);
          setText("");
          setIsSubmitting(false);
        })
        .catch((error) => {
          console.log(error);
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="post-comment">
      <h3>Post a Comment:</h3>
      <form onSubmit={(event) => handlePostComment(event)}>
        <label htmlFor="post-comment-text">New Comment:</label>
        <textarea
          id="post-comment-text"
          className="form-control"
          rows="5"
          required
          value={text}
          placeholder="Start typing your comment..."
          onChange={(event) => setText(event.target.value)}
        ></textarea>
        <div className="mb-3 d-flex justify-content-between align-items-center">
          {!user && (
            <p>
              Please <Link to="/users">log in</Link> to comment
            </p>
          )}
          <Button
            type="submit"
            variant="danger"
            disabled={!user || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <RedSpinner /> Submitting...
              </>
            ) : user ? (
              "Post comment"
            ) : (
              "Login to comment"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostComment;
