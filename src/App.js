import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [post, setPost] = useState([
    { userId: 1, id: 101, title: "Mohammad", body: "mohammadBody" },
    { userId: 2, id: 102, title: "alnabale", body: "mohammadBody2" },
  ]);
  const array = post.map((ele, i) => {
    return (
      <div key={i}>
        <p> {ele.title}</p>
        <p>{ele.body}</p>
      </div>
    );
  });
  console.log(post[0]);

  return (
    <div>
      <h1>Blog App</h1>
      {array}
    </div>
  );
};

export default App;
