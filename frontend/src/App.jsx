import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Welcome to the Bill Management App</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        <Link to="/bills">
          <button>See Bills List</button>
        </Link>
        <Link to="/grouped-bills">
          <button>See Bills by Group</button>
        </Link>
        <Link to="/credit-debit-bills">
          <button>See Credit/Debit Bills</button>
        </Link>
        <Link to="/auto-manual-bills">
          <button>See Auto/Manual Pay Bills</button>
        </Link>
      </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
