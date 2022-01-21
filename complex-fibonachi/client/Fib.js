import React, { useState } from "react";
import axios from "axios";

const Fib = () => {
  const fetchValues = async () => {
    const values = await axios.get("/api/values/current");
    setState((prevState) => ({ ...prevState, values }));
  };
  const fetchIndexes = async () => {
    const seenIndexes = await axios.get("/api/values/all");
    setState((prevState) => ({ ...prevState, seenIndexes }));
  };
  const [state, setState] = useState({
    seenIndexes: [],
    values: {},
    index: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/values");
    res.finally(() => {
      setState((prevState) => ({ ...prevState, index: "" }));
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Enter your index :</label>
        <input
          value={state.index}
          onChange={(e) =>
            setState((prevState) => ({ ...prevState, index: e.target.value }))
          }
        />
        <button>submit</button>
      </form>
      <h3>Indexes I Have Seen</h3>
      {state.seenIndexes.map(({ number }) => number).join(", ")}
      <h3>Calculated Values </h3>
      {state.seenIndexes.map((el, index) => (
        <div key={index}>{state.values[el]}</div>
      ))}
    </div>
  );
};

export default Fib;
