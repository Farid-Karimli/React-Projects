import React, { useState, useEffect } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("#f15025");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  useEffect(() => {
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }, []);
  return (
    <>
      <section className="container">
        <h3> Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          ></input>
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((item, index) => {
          console.log(item);
          return <SingleColor key={index} {...item} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
