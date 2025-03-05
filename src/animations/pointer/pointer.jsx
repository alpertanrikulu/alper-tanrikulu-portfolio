import React from "react";

const pointer = () => {
  return (
    <div>
      <pointer-particles
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2, // En arka plana yerleştirir
        }}
      ></pointer-particles>
    </div>
  );
};

export default pointer;
