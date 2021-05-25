import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [post, setPost] = useState([
    { userId: 1, id: 101, title: "JavaScript", body: "ReactHocks" },
    { userId: 2, id: 102, title: "State Hocks", body: "Effect Hocks" },
  ]);

  const [userId, setUserId] = useState(0);
  const [id, setId] = useState(101);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const changeUseID = (e) => {
    setUserId(e.target.value);
  };
  const changeID = (e) => {
    setId(e.target.value);
  };
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const ChangeBody = (e) => {
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

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((rsl) => {
      setPost(rsl.data);
    });
  }, []);
  return (
    <div>
      <h1>Blog App</h1>
      {array}
      <input placeholder="userId" onChange={changeUseID}></input>
      <input placeholder="id" onChange={changeID}></input>
      <input placeholder="title" onChange={changeTitle}></input>
      <input placeholder="body" onChange={ChangeBody}></input>
      <button
        onClick={() => {
          setPost([...post, { userId, id, title, body }]);
        }}
      >
        click
      </button>
    </div>
  );
};

export default App;
