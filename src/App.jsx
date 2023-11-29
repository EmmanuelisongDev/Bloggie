import { Home, BlogContentPage } from "./pages";
import { Footer, Navbar } from "./component";
import { Routes, Route } from "react-router-dom";
import client from "./Client.js";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [post, setPost] = useState([]);

  const fetchPosts = async () => {
    const data = await client
      .fetch(
        `    *[_type == 'post']{
        _id,
        title,
          slug,
          image,
          _updatedAt,
          body
      }`
      )
      .catch((error) => console.error("Error fetching data:", error));

    setPost(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home post={post} />} />
        <Route
          path="/blogcontent/:slug"
          element={<BlogContentPage post={post} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
