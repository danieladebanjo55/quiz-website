import React, { useState } from "react";
import Quiz from "./Components/Quiz/Quiz";

import logo from "../src/assets/fhg.png";

function App() {
  const [begin, setBegin] = useState(true);

  const startTest = () => {
    setBegin(false);
  };

  return (
    <div>
      {begin ? (
        <>
          <div className="container-main">
            <img src={logo} alt="logo" className="logo" />
            <h1>Welcome To Your FHG Training Exam</h1>
            <h2 style={{ textAlign: "center" }}>
              You have 35 mins to answer 50 questions.
            </h2>
            <h2>Good Luck!</h2>
            <button onClick={startTest}>Get Started</button>
          </div>
        </>
      ) : (
        <Quiz />
      )}
    </div>
  );
}

export default App;
