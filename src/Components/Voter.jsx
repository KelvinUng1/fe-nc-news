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
//Toggle button - local storage rabbit hole? NOT WORKING//

//import React, { useState } from "react";
// import { patchArticleVotes } from "../api";

// const Voter = ({ article, votes, setArticle }) => {
//   const [voted, setVoted] = useState(0); // 0: Not voted, 1: Upvoted, -1: Downvoted

//   const handleVote = (voteType) => {
//     if (voted === voteType) {
//      
//       setVoted(0);
//       patchVotes(0); // Unvote
//     } else {
//       
//       setVoted(voteType);
//       patchVotes(voteType);
//     }
//   };

//   const patchVotes = (voteType) => {
//     
//     const newVotes = votes + voteType - voted;

//     
//     setArticle((prevArticle) => ({
//       ...prevArticle,
//       votes: newVotes,
//     }));

//     
//     patchArticleVotes(article.article_id, voteType)
//       .then(() => {
//        
//       })
//       .catch((error) => {
//         console.error("Failed to update votes:", error);
//         
//         setArticle((prevArticle) => ({
//           ...prevArticle,
//           votes: prevArticle.votes - voted,
//         }));
//       });
//   };

//   return (
//     <div className="voter">
//       <button
//         onClick={() => handleVote(1)}
//         className={`vote-button ${voted === 1 ? "upvoted" : ""}`}
//       >
//         ▲
//       </button>
//       <span className="vote-count">{votes}</span>
//       <button
//         onClick={() => handleVote(-1)}
//         className={`vote-button ${voted === -1 ? "downvoted" : ""}`}
//       >
//         ▼
//       </button>
//     </div>
//   );
// };
//
//export default Voter;