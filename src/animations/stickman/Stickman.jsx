import React, { useEffect, useRef, useState } from "react";
import "./stickman.css";
import S1 from "./svg/stickman1.svg";
import S2 from "./svg/stickman2.svg";
import S3 from "./svg/stickman3.svg";
import S4 from "./svg/stickman4.svg";
import S5 from "./svg/stickman5.svg";
import S6 from "./svg/stickman6.svg";
import S7 from "./svg/stickman7.svg";
import S8 from "./svg/stickman8.svg";
import S9 from "./svg/stickman9.svg";
import S10 from "./svg/stickman10.svg";

const stickmans = [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10];

const Stickman = () => {
  const bannerrRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const bannerr = bannerrRef.current;
    const canvas = canvasRef.current;
    if (!bannerr || !canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = bannerr.offsetWidth;
    canvas.height = bannerr.offsetHeight;

    // **Stickman görsellerini yükle**
    const loadImages = async () => {
      let loadedImages = [];
      for (let i = 0; i < stickmans.length; i++) {
        let img = new Image();
        img.src = stickmans[i];
        await new Promise((resolve) => {
          img.onload = () => {
            let aspectRatio = img.naturalWidth / img.naturalHeight;
            loadedImages.push({ img, aspectRatio });
            resolve();
          };
        });
      }
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  useEffect(() => {
    const bannerr = bannerrRef.current;
    const canvas = canvasRef.current;
    if (!bannerr || !canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    let dots = [];

    const initializeDots = () => {
      dots = images.map(({ img, aspectRatio }) => {
        let maxSize = Math.min(canvas.width, canvas.height) * 0.12;
        let width = maxSize;
        let height = maxSize / aspectRatio;

        return {
          img,
          x: Math.random() * (canvas.width - width),
          y: Math.random() * (canvas.height - height),
          width,
          height,
        };
      });

      drawDots();
    };

    const drawDots = (mouse = null) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        ctx.drawImage(dot.img, dot.x, dot.y, dot.width, dot.height);
      });

      if (mouse) {
        dots.forEach((dot) => {
          let centerX = dot.x + dot.width / 2;
          let centerY = dot.y + dot.height / 2;
          let distance = Math.sqrt(
            (mouse.x - centerX) ** 2 + (mouse.y - centerY) ** 2
          );

          if (distance < 100) {
            ctx.strokeStyle = "#fff";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        });
      }
    };

    const handleMouseMove = (event) => {
      let mouse = {
        x: event.clientX - bannerr.getBoundingClientRect().left,
        y: event.clientY - bannerr.getBoundingClientRect().top,
      };
      drawDots(mouse);
    };

    const handleMouseOut = () => drawDots();

    const handleResize = () => {
      canvas.width = bannerr.offsetWidth;
      canvas.height = bannerr.offsetHeight;
      initializeDots();
    };

    bannerr.addEventListener("mousemove", handleMouseMove);
    bannerr.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("resize", handleResize);

    initializeDots();

    return () => {
      bannerr.removeEventListener("mousemove", handleMouseMove);
      bannerr.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", handleResize);
    };
  }, [images]);

  return (
    <div
      className="bannerr"
      ref={bannerrRef}
      style={{
        width: "400px",
        height: "150px",
        transform: "translateY(-20px)",
      }}
    >
      <canvas id="dotsCanvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default Stickman;
