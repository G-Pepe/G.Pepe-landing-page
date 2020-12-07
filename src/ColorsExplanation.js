import React from "react";

export const ColorsExplanation = () => {
  return (
    <div style={{ position: "absolute", bottom: "5%", right: "10%" }}>
      <p
        style={{
          backgroundColor: "rgba(96,164,115,0.9)",
          height: "25px",
          marginBottom: "0",
          padding: "2px",
        }}
      >
        No priority - 0 to 2
      </p>
      <p
        style={{
          backgroundColor: "rgba(95,158,160,1)",
          height: "25px",
          marginBottom: "0",
          padding: "2px",
        }}
      >
        Low priority - 3 to 4
      </p>
      <p
        style={{
          backgroundColor: "yellow",
          marginBottom: "0",
          height: "25px",
          padding: "2px",
        }}
      >
        Normal priority - 5 to 7
      </p>
      <p
        style={{
          backgroundColor: "rgb(214,182,109)",
          marginBottom: "0",
          height: "25px",
          padding: "2px",
        }}
      >
        Medium priority - 8 to 9
      </p>
      <p
        style={{
          backgroundColor: "rgba(160,82,45,0.7)",
          padding: "2px",
          height: "25px",
        }}
      >
        High priority - from 10
      </p>
    </div>
  );
};
