import Navbar from "./Components/Navbar";
import Home from "./Components/home";
import Articles from "./Components/Articles";
import ArticleItem from "./Components/ArticleItem";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="articles/:article_id" element={<ArticleItem />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
