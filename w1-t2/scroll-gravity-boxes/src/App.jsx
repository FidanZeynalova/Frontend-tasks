import React, { useState, useEffect, useRef } from 'react';

const ScrollGravityBoxes = () => {
  const [boxes, setBoxes] = useState([]);
  const scrollRef = useRef({ y: 0, velocity: 0, lastTime: Date.now() });
  const animationRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const initialBoxes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 10,
      rotation: Math.random() * 360,
      velocityY: 0,
      velocityX: 0,
      rotationVelocity: 0,
      size: Math.random() * 20 + 30,
    }));
    setBoxes(initialBoxes);
  }, []);

  // Handle scroll events
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const now = Date.now();
          const currentScrollY = window.scrollY;
          const deltaTime = (now - scrollRef.current.lastTime) / 1000;
          const deltaScroll = currentScrollY - scrollRef.current.y;

          const velocity = deltaTime > 0 ? deltaScroll / deltaTime : 0;

          scrollRef.current = {
            y: currentScrollY,
            velocity: velocity * 0.4,
            lastTime: now,
          };

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Physics animation loop
  useEffect(() => {
    const GRAVITY = 800;
    const FRICTION = 0.98;
    const ROTATION_FRICTION = 0.95;
    const BOUNCE_DAMPING = 0.6;
    const SCROLL_INFLUENCE = 0.35;

    const animate = () => {
      const deltaTime = 1 / 60;
      const scrollVelocity = scrollRef.current.velocity;

      setBoxes(prevBoxes =>
        prevBoxes.map(box => {
          let { x, y, velocityY, velocityX, rotation, rotationVelocity, size } = box;

          velocityY += scrollVelocity * SCROLL_INFLUENCE;
          velocityY += GRAVITY * deltaTime;

          velocityY *= FRICTION;
          velocityX *= FRICTION;
          rotationVelocity *= ROTATION_FRICTION;

          y += velocityY * deltaTime;
          x += velocityX * deltaTime;
          rotation += rotationVelocity * deltaTime;

          const containerHeight = containerRef.current?.clientHeight || 600;
          const containerWidth = containerRef.current?.clientWidth || 800;

          const maxY = 100 - (size / containerHeight * 100);
          const maxX = 100 - (size / containerWidth * 100);

          if (y > maxY) {
            y = maxY;
            velocityY = -velocityY * BOUNCE_DAMPING;
            rotationVelocity = velocityX * 3;
          }

          if (y < 0) {
            y = 0;
            velocityY = -velocityY * BOUNCE_DAMPING;
          }

          if (x > maxX) {
            x = maxX;
            velocityX = -velocityX * BOUNCE_DAMPING;
            rotationVelocity = -velocityY * 2;
          }

          if (x < 0) {
            x = 0;
            velocityX = -velocityX * BOUNCE_DAMPING;
            rotationVelocity = velocityY * 2;
          }

          return {
            ...box,
            x,
            y,
            velocityY,
            velocityX,
            rotation,
            rotationVelocity,
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className=" bg-gradient-to-br from-slate-900 to-slate-900 p-8">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl font-bold text-white mb-4">Scroll Gravity Boxes</h1>
        </div>

        {/* Main Container Box */}
        <div
          ref={containerRef}
          className="relative bg-slate-800/40 rounded-3xl border-4 border-slate-700 overflow-hidden shadow-2xl mx-auto"
          style={{
            height: '500px',
            maxWidth: '500px'
          }}
        >
          {/* Small boxes inside */}
          {boxes.map(box => (
            <div
              key={box.id}
              className="absolute"
              style={{
                left: `${box.x}%`,
                top: `${box.y}%`,
                width: `${box.size}px`,
                height: `${box.size}px`,
                transform: `translate(-50%, -50%) rotate(${box.rotation}deg)`,
                willChange: 'transform',
              }}
            >
              <div
                className="w-full h-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-lg shadow-lg"
                style={{
                  boxShadow: `0 ${Math.abs(box.velocityY) / 40}px ${Math.abs(box.velocityY) / 15}px rgba(16, 185, 129, 0.4)`,
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ScrollGravityBoxes;