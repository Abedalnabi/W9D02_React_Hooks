import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [post, setPost] = useState([
    { userId: 1, id: 101, title: "Mohammad", body: "mohammadBody" },
    { userId: 2, id: 102, title: "alnabale", body: "mohammadBody2" },
  ]);

  const [userId, setUserId] = useState(6);
  const [id, setId] = useState(150);
  const [title, setTitle] = useState("nab");
  const [body, setBody] = useState("adsad");

  const array = post.map((ele, i) => {
    return (
      <div key={i}>
        <p> Title : {ele.title}</p>
        <p> Body: {ele.body}</p>

        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <button>click</button>
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
