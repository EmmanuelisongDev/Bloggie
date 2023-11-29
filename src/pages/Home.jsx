import { Blogs, Hero } from "../component";
// import React from "react";

const Home = ({ post }) => {
  return (
    <>
      <div>
        <Hero />
        <Blogs post={post} />
      </div>
    </>
  );
};

export default Home;
