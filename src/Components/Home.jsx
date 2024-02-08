import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
const Home = () => {

  const {user} = useContext(UserContext)
  console.log("current user:", user)
  return (  
    <section id="home-content">
    <h1>Welcome to Northcoder News!</h1>

    {user && (
        <>
          <p>Welcome back, {user.username}</p>
          <img src={user.avatar_url} alt={`Avatar of ${user.username}`} style={{width:100, height:75}} />
        </>
      )}
    <p>Bringing you all the latest stories</p>
  </section>
);
};


export default Home;
