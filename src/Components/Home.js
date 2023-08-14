import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import Page from "../ConnectedComponents/ConnectedPages"
import NavBar from "./NavBar";
import Slicer from "./Slicer";
import Todo from "./Todo.js";

function Home() {
  const amount = useSelector((state) => state.amountReducer);

  return (
    <>
      <NavBar></NavBar>
      <Todo></Todo>
    </>
  );
}

export default Home;
