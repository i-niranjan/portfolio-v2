import React, { useRef, useEffect } from "react";
import useGameEngine from "./useGameEngine";

const FooterGame = () => {
  const canvasRef = useRef(null);

  useGameEngine(canvasRef);

  return (
    <div className="w-full bg-black py-4">
      <canvas
        ref={canvasRef}
        width={600}
        height={200}
        style={{ background: "#111", display: "block", margin: "0 auto" }}
      />
    </div>
  );
};

export default FooterGame;
