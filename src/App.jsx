import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Articles from "./Components/Articles";
import ArticleItem from "./Components/ArticleItem";
import Users from "./Components/Users";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./Components/contexts/UserContext";
import { useState } from "react";


function App() {
  const [user, setUser] = useState(null)
  return (
    <>
    <UserProvider value={{user, setUser}} >

      
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/articles/:article_id" element={<ArticleItem />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </div>
    </UserProvider>
    </>
  );
}

export default App;
