import React, { Component, useState, useEffect } from "react";
import axios from "axios";

// Fibonacci class, this will be a component
const Fib = () => {
  // objet with an array, and object and a string
  const [state, setState] = useState({
    seenIndexes: [],
    values: {},
    index: "",
  });

  // It is called once in the component life cycle and it signals that the component
  // and all its sub-components have rendered properly
  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  // method to fetch the values
  // the '/api/values/current' is part of the express server as a handler for redis
  const fetchValues = async () => {
    const values = await axios.get("/api/values/current");
    setState((prevState) => ({ ...prevState, values: values.data }));
  };

  // method for indexes that has been indexed
  // the '/api/values/all' is part of the express server as a handler for postgres

  const fetchIndexes = async () => {
    const seenIndexes = await axios.get("/api/values/all");
    setState((prevState) => ({ ...prevState, seenIndexes: seenIndexes.data }));
  };

  // method to handle each time the form is submitted
  // assigning an anonymous function to handleSubmit to make it a function
  const handleSubmit = async (event) => {
    event.preventDefault();
    //making a post after the post to send an object
    await axios.post("/api/values", {
      index: state.index,
    });
    //clear the index value after submitting
    setState((prevState) => ({ ...prevState, index: "" }));
  };

  //method to render indexes
  const renderSeenIndexes = () => {
    return state.seenIndexes?.map(({ number }) => number).join(", ");
  };

  const renderValues = () => {
    // remember values here are object as that is what Redis is gonng return
    // os it will have many key:value pairs
    const entries = [];

    for (let key in state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {state.values[key]}
        </div>
      );
    }

    return entries;
  };

  // the method to render on screen
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input
          value={state.index}
          onChange={(event) =>
            setState((prevState) => ({
              ...prevState,
              index: event.target.value,
            }))
          }
        />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {renderSeenIndexes()}

      <h3>Calculated Values:</h3>
      {renderValues()}
    </div>
  );
};

export default Fib;
