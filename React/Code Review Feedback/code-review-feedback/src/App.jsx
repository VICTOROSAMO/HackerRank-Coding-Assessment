import React from "react";
import "./App.css";
import FeedbackSystem from "./CodeReviewFeedback";


// Custom Navbar component (pure JavaScript, no TypeScript)
const Navbar = ({ header }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">{header}</h1>
    </nav>
  );
};

const title = "Code Review Feedback";

const App = () => {
  return (
    <div className="App">
      <Navbar header={title} />
      <FeedbackSystem/>
    </div>
  );
};

export default App;