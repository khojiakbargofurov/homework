import React, { useState } from "react";
import { instance } from "./api/axios"; // Import instance from your axios configuration

const App = () => {
  const [state, setState] = useState({
    title: "",
    url: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: state.name,
      job: state.job
    };
    instance.post("/posts", userData).then((response) => {
      console.log(response.status, response.data);
    });
  };

  return (
    <div>
      <h1>Register or Create new account</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="job">
          Job
          <input
            type="text"
            name="job"
            value={state.job}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default App;
