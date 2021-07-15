import React from "react";
import { Liquidswipe } from "react-liquidswipe";
import randomColor from "randomcolor";

const MAX = 5;

function App() {
  let components = [];
  for (var i = 1; i <= MAX; i++) {
    components.push(
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            background: randomColor({ luminosity: "light" }),
          }}
        >
          <h1>{i}</h1>
        </div>
      </>
    );
  }

  return <Liquidswipe components={components} />;
}

export default App;
