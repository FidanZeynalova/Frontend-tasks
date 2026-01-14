import React, { useState, useEffect, useRef } from 'react';

// Small Boxes
const generateInitialBoxes = (num) => {
  return Array.from({ length: num }, (_, i) => ({
    id: `box-${Math.random().toString(36).substr(2, 9)}`,
    x: 15 + Math.random() * 70,
    y: 10 + Math.random() * 40,
    rotation: Math.random() * 360,
    velocityY: 0,
    velocityX: (Math.random() - 0.5) * 5,
    rotationVelocity: 0,
    size: Math.floor(Math.random() * 25) + 45,
  }));
};

const ScrollGravityBoxes = () => {
  const [boxes, setBoxes] = useState(() => generateInitialBoxes(12));
  const containerRef = useRef(null);
  const requestRef = useRef();


  const scrollData = useRef({
    lastY: typeof window !== 'undefined' ? window.scrollY : 0,
    currentVelocity: 0,
  });


  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - scrollData.current.lastY;


      scrollData.current.currentVelocity = diff * 0.5;
      scrollData.current.lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const animate = () => {
    const gravity = 0.15;
    const friction = 0.9;
    const bounce = 0.55;

    scrollData.current.currentVelocity *= 0.92;
    const forceFromScroll = scrollData.current.currentVelocity;

    setBoxes(prevBoxes => prevBoxes.map(box => {
      let { x, y, velocityY, velocityX, rotation, rotationVelocity, size } = box;

      // Gravity and scroll force
      velocityY += gravity + forceFromScroll;

      // friction(Sürtünmə)
      velocityY *= friction;
      velocityX *= friction;
      rotationVelocity *= friction;

      // new positions
      y += velocityY;
      x += velocityX;
      rotation += rotationVelocity;

      // container size
      const ch = containerRef.current?.clientHeight || 500;
      const cw = containerRef.current?.clientWidth || 500;

      const sizePercentY = (size / ch) * 100;
      const sizePercentX = (size / cw) * 100;

      if (y > (100 - sizePercentY / 2)) {
        y = 100 - sizePercentY / 2;
        velocityY *= -bounce;
        rotationVelocity = velocityX * 2.5;
      }

      if (y < (sizePercentY / 2)) {
        y = sizePercentY / 2;
        velocityY *= -bounce;
      }

      if (x > (100 - sizePercentX / 2) || x < (sizePercentX / 2)) {
        velocityX *= -bounce;
        x = x < 50 ? sizePercentX / 2 : 100 - sizePercentX / 2;
      }

      return { ...box, x, y, velocityY, velocityX, rotation, rotationVelocity };
    }));

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="min-h-[200vh] bg-stone-900 py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-black text-white mb-10 tracking-tight">Scroll Gravity Boxes</h1>

        <div
          ref={containerRef}
          className="relative bg-emerald-500 rounded-2xl border-4 border-stone-800 shadow-2xl overflow-hidden mx-auto"
          style={{ height: '550px', width: '100%', maxWidth: '500px' }}
        >
          {boxes.map(box => (
            <div
              key={box.id}
              className="absolute select-none pointer-events-none"
              style={{
                left: `${box.x}%`,
                top: `${box.y}%`,
                width: `${box.size}px`,
                height: `${box.size}px`,
                transform: `translate(-50%, -50%) rotate(${box.rotation}deg)`,
              }}
            >
              <div className="w-full h-full bg-orange-700 border-2 border-orange-950 rounded-lg shadow-inner" />
            </div>
          ))}
        </div>

        <p className="mt-8 text-stone-500 italic">Try scrolling fast up and down...</p>
      </div>
    </div>
  );
};

export default ScrollGravityBoxes;