import React, {useEffect, useRef } from 'react';

const Cursor = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const pointer = {
    x: 0.5 * window.innerWidth,
    y: 0.5 * window.innerHeight,
  };

  const params = {
    pointsNumber: 50,
    widthFactor: 3,
    mouseThreshold: 5,
    spring: 0.4,
    friction: 0.5,
  };

  const trail = new Array(params.pointsNumber).fill().map(() => ({
    x: pointer.x,
    y: pointer.y,
    dx: 0,
    dy: 0,
  }));

useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;

    const updateMousePosition = (eX, eY) => {
      pointer.x = eX;
      pointer.y = eY;
    };

    const handleMouseClick = (e) => {
      updateMousePosition(e.pageX, e.pageY);
    };

    const handleMouseMove = (e) => {
      updateMousePosition(e.pageX, e.pageY);
    };

    const handleTouchMove = (e) => {
      updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    };

    window.addEventListener('click', handleMouseClick);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    setupCanvas();

    const update = (t) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        trail.forEach((p, pIdx) => {
            const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
            const spring = pIdx === 0 ? .4 * params.spring : params.spring;
            p.dx += (prev.x - p.x) * spring;
            p.dy += (prev.y - p.y) * spring;
            p.dx *= params.friction;
            p.dy *= params.friction;
            p.x += p.dx;
            p.y += p.dy;
        });

        ctx.lineCap = "square";
        ctx.lineJoim = 'round';
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(trail[0].x, trail[0].y);

        for (let i = 1; i < trail.length - 1; i++) {
            const xc = .5 * (trail[i].x + trail[i + 1].x);
            const yc = .5 * (trail[i].y + trail[i + 1].y);
            ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
            ctx.lineWidth = params.widthFactor;
            ctx.stroke();
        }
        ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
        ctx.stroke();
        
        window.requestAnimationFrame(update);
    };

    update(0); // Start the animation loop

    window.addEventListener('resize', setupCanvas);

    return () => {
      window.removeEventListener('click', handleMouseClick);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', setupCanvas);
    }; // eslint-disable-next-line
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  return (
    <>
      <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Additional JSX for links can be added here */}
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 2 }}></canvas>
    </div>
    </>
  );
};

export default Cursor;
