import "./App.css";
import React from "react";

import List from "./components/list";

const items = [
  { text: "Ram", selected: false },
  { text: "Vishnu", selected: false },
  { text: "Vinay", selected: false },
  { text: "Litesh", selected: false },
  { text: "Abhi", selected: false },
];

const Home = () => {
  return (
    <div className="App">

      <h2 className="heading">The List</h2>

      <List items={items} />
    </div>
  );
};

export default Home;
