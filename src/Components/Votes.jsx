import { useState } from "react";
import { patchArticleVotes } from "../api";
import { HandThumbsUp, HandThumbsDown } from "react-bootstrap-icons";

const Votes = ({ article }) => {
  const [votes, setVotes] = useState(article.votes);
  const [err, setErr] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [activeBtn, setActiveBtn] = useState("none");

  const handleReactionClick = (reaction) => {
    if (activeBtn !== reaction) {
      const voteChange = reaction === "like" ? 1 : -1;
      patchArticleVotes(article.article_id, voteChange)
        .then(() => {
          setVotes((prevVotes) => prevVotes + voteChange);
          setActiveBtn(reaction);
          setErr("Your vote has been counted!");
          setDisabled(true);
        })
        .catch(() => {
          setErr("Something went wrong, please try again later.");
        });
    } else {
      setVotes((prevVotes) => prevVotes - (reaction === "like" ? 1 : -1));
      setActiveBtn("none");
      setErr("");
      setDisabled(false);
    }
  };

return (
    <>
      {/* like button */}
      <button
        className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
        onClick={() => handleReactionClick("like")}
        disabled={disabled}
      >
        <HandThumbsUp /> Like
      </button>

      {votes}

      {/* dislike button */}
      <button
        className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
        onClick={() => handleReactionClick("dislike")}
        disabled={disabled}
      >
        <HandThumbsDown /> Dislike
      </button>
    </>
  );
};


export default Votes;


