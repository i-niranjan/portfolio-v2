import { useEffect, useRef } from "react";

const useGameEngine = (canvasRef) => {
  const player = useRef({
    x: 50,
    y: 150,
    width: 30,
    height: 30,
    velocityY: 0,
    isJumping: false,
  });
  const gravity = 0.8;
  const groundY = 180;
  const obstacles = useRef([]);
  const gameOver = useRef(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        if (gameOver.current) {
          // Reset game state
          player.current.y = 150;
          player.current.velocityY = 0;
          player.current.isJumping = false;
          obstacles.current = [];
          gameOver.current = false;
          gameLoop(); // Restart loop
          return;
        }

        if (!player.current.isJumping) {
          player.current.velocityY = -12;
          player.current.isJumping = true;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const spawnInterval = 1500; // milliseconds
    let lastSpawnTime = 0;
    let animationFrameId;
    const gameLoop = () => {
      const now = Date.now();
      if (gameOver.current) {
        // Show game over text
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fff";
        ctx.font = "20px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
        ctx.fillText(
          "Press Space to Restart",
          canvas.width / 2,
          canvas.height / 2 + 30
        );
        return;
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Gravity
      player.current.velocityY += gravity;
      player.current.y += player.current.velocityY;

      // Ground collision
      if (player.current.y > groundY - player.current.height) {
        player.current.y = groundY - player.current.height;
        player.current.velocityY = 0;
        player.current.isJumping = false;
      }

      // Draw ground
      ctx.fillStyle = "#444";
      ctx.fillRect(0, groundY, canvas.width, 5);

      // Spawn new obstacle
      if (now - lastSpawnTime > spawnInterval) {
        obstacles.current.push({
          x: canvas.width,
          y: groundY - 20,
          width: 20,
          height: 20,
        });
        lastSpawnTime = now;
      }

      // Move, draw, and check collision
      ctx.fillStyle = "#f00";
      const px = player.current;
      obstacles.current.forEach((ob, index) => {
        ob.x -= 5;

        // Collision check
        if (
          px.x < ob.x + ob.width &&
          px.x + px.width > ob.x &&
          px.y < ob.y + ob.height &&
          px.y + px.height > ob.y
        ) {
          gameOver.current = true;
        }

        // Remove if off screen
        if (ob.x + ob.width < 0) {
          obstacles.current.splice(index, 1);
        }

        // Draw
        ctx.fillRect(ob.x, ob.y, ob.width, ob.height);
      });

      // Draw player
      ctx.fillStyle = "#0f0";
      ctx.fillRect(
        player.current.x,
        player.current.y,
        player.current.width,
        player.current.height
      );

      // Collision check

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [canvasRef]);
};

export default useGameEngine;
