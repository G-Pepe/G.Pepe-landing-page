import React from "react";

export const ColorsExplanation = () => {
  return (
    <div style={{ position: "absolute", bottom: "10%", right: "10%" }}>
      <p
        style={{
          backgroundColor: "rgba(96,164,115,0.9)",
          height: "30px",
          padding: "5px",
        }}
      >
        No priority - 0 to 2
      </p>
      <p
        style={{
          backgroundColor: "rgba(95,158,160,1)",
          height: "30px",
          padding: "5px",
        }}
      >
        Low priority - 3 to 4
      </p>
      <p
        style={{
          backgroundColor: "yellow",
          padding: "5px",
          height: "30px",
        }}
      >
        Normal priority - 5 to 7
      </p>
      <p
        style={{
          backgroundColor: "rgb(214,182,109)",
          padding: "5px",
          height: "30px",
        }}
      >
        Medium priority - 8 to 9
      </p>
      <p
        style={{
          backgroundColor: "rgba(160,82,45,0.7)",
          padding: "5px",
          height: "30px",
        }}
      >
        High Priority - from 10
      </p>
    </div>
  );
};
