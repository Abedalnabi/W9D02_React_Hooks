import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [post, setPost] = useState([
    { userId: 1, id: 101, title: "JavaScript", body: "ReactHocks" },
    { userId: 2, id: 102, title: "State Hocks", body: "Effect Hocks" },
  ]);

  const [userId, setUserId] = useState(0);
  const [id, setId] = useState(101);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const changeID = (e) => {
    setUserId(e.target.value);
    setId(e.target.value);
    setTitle(e.target.value);
    setBody(e.target.value);
  };
  const array = post.map((ele, i) => {
    return (
      <div key={i}>
        <p>
          {ele.title}, {ele.body}
        </p>
      </div>
    );
  });

  return (
    <div>
      <h1>Blog App</h1>
      {array}
      <input placeholder="userId" onChange={changeID}></input>
      <input placeholder="id" onChange={changeID}></input>
      <input placeholder="title" onChange={changeID}></input>
      <input placeholder="body" onChange={changeID}></input>
      <button>click</button>
    </div>
  );
};

export default App;
