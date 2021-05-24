import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [post, setPost] = useState([
    { userId: 1, id: 101, title: "Mohammad", body: "mohammad" },
    { userId: 2, id: 102, title: "alnabale", body: "mohammad" },
  ]);

  return (
    <div>
      <h1>Blog App</h1>
    </div>
  );
};

export default App;
