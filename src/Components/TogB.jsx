// Toggle button - local storage rabbit hole? NOT WORKING//

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