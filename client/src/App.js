import React from "react";
import { Router } from "@reach/router";
import './App.css';
import AuthorList from "./views/AuthorList";
import AuthorForm from "./views/AuthorForm";
import AuthorEdit from "./views/AuthorEdit";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthorList path="/" />
        <AuthorForm path="new" />
        <AuthorEdit path="edit/:id" />
      </Router>
    </div>
  );
}

export default App;
