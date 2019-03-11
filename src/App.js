import React from "react";
import { hot } from 'react-hot-loader/root'
import "./app.scss";

const App = () => {
  return (
    <div className="full-screen">
      <div>
        <h1>
          I 360
        </h1>
        <br />
        <a
          className="button-line"
          href=""
          target="_blank"
        >
          Know more now
        </a>
      </div>
    </div>
  );
};

export default hot(App);