import React, { useState } from "react";
import { patchArticleVotes } from "../api";
import { HandThumbsUp, HandThumbsDown } from "react-bootstrap-icons";

export const Voter = ({ article_id, votes, setArticle }) => {
  const [votesDiff, setVotesDiff] = useState(0);
  const [error, setError] = useState(null);

  const handleVote = (voteChange) => {
    setArticle((currentArticle) => {
      const copyArticle = { ...currentArticle };
      copyArticle.votes += voteChange;
      return copyArticle;
    });
    setVotesDiff((currentVotes) => {
      return currentVotes + voteChange;
    });

    setError(null);

    //update votes
    patchArticleVotes(article_id, voteChange)
      .then(() => {})

      .catch((error) => {
        console.err("Error updating votes:", err);
        setError("Something went wrong, please try again later");
      });  
  };

  return (
    <div className="voter-container">
      {error && <p className="error">{error}</p>}
      <button
        className="like-btn"
        disabled={votesDiff === 1}
        aria-label="like"
        onClick={() => {
          handleVote(1);
        }}
      >
        <HandThumbsUp />
      
      </button>
      <span className="vote-count">{votes}</span>
      <button
        className="dislike-btn"
        disabled={votesDiff === -1}
        aria-label="dislike"
        onClick={() => {
          handleVote(-1);
        }}
      >
        <HandThumbsDown />
      
      </button>
    </div>
  );
};

export default Voter;
