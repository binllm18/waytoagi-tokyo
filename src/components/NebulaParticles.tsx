"use client";
import { useEffect, useRef } from "react";

export default function NebulaParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      color: string;
      vx: number;
      vy: number;
      angle: number;
      spin: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.angle = Math.random() * 360;
        this.spin = (Math.random() - 0.5) * 0.02;
        
        // Deep space dark theme colors curated for the glowing Tokyo temple night scene
        const colors = [
          "rgba(147, 197, 253,", // bright ice blue
          "rgba(196, 181, 253,", // soft purple
          "rgba(253, 230, 138,", // pale gold
          "rgba(255, 255, 255,"  // pure white star
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(mouse: {x: number, y: number, radius: number}, time: number, w: number, h: number) {
        // Natural drift
        this.x += this.vx;
        this.y += this.vy;
        this.angle += this.spin;

        // Nebula sway factor (floating in space)
        this.baseX += Math.cos(this.angle) * 0.2;
        this.baseY += Math.sin(this.angle) * 0.2;
        
        // Apply global sine wave drift to mimic moving dense clouds
        this.baseY += Math.sin(time + this.x * 0.01) * 0.1;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        // Fluid repulsion & swirling on mouse move
        if (distance < mouse.radius) {
          let force = (mouse.radius - distance) / mouse.radius;
          let a = Math.atan2(dy, dx);
          // push slightly away and swirl
          this.x -= Math.cos(a + Math.PI / 4) * force * 4;
          this.y -= Math.sin(a + Math.PI / 4) * force * 4;
          // Soft repulsion barrier
          this.x -= Math.cos(a) * force * 2;
          this.y -= Math.sin(a) * force * 2;
        }

        // Smooth gravity pulling particles back to base clusters gently creating moving waves
        this.x += (this.baseX - this.x) * 0.05;
        this.y += (this.baseY - this.y) * 0.05;

        // Safe bounds
        if (this.baseX < -100) this.baseX = w + 100;
        if (this.baseX > w + 100) this.baseX = -100;
        if (this.baseY < -100) this.baseY = h + 100;
        if (this.baseY > h + 100) this.baseY = -100;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        // Inner bright spark
        const innerGrad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        innerGrad.addColorStop(0, this.color + "1)");
        innerGrad.addColorStop(1, this.color + "0)");
        ctx.fillStyle = innerGrad;
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Nebula glow overlap (ambient fluid light)
        if (this.size > 1.2) {
          const outerGrad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 18);
          // Dark theme opacity adjustment (kept super subtle)
          outerGrad.addColorStop(0, this.color + "0.08)");
          outerGrad.addColorStop(1, this.color + "0)");
          ctx.beginPath();
          ctx.fillStyle = outerGrad;
          ctx.arc(this.x, this.y, this.size * 18, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    let particles: Particle[] = [];
    const init = () => {
      particles = [];
      const pCount = Math.min(Math.floor((width * height) / 10000), 200); // max 200 to protect fps
      for (let i = 0; i < pCount; i++) {
        particles.push(new Particle(width, height));
      }
    };
    init();

    let mouse = { x: -1000, y: -1000, radius: 250 };
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.02;

      ctx.globalCompositeOperation = "source-over";
      // Clear with translucent black to let trailing nebula particles ghost/blur into clouds
      ctx.fillStyle = "rgba(10, 10, 12, 0.35)";
      ctx.fillRect(0, 0, width, height);

      // Apply screen mixing for beautiful blooming overlapped lights
      ctx.globalCompositeOperation = "screen";
      
      // Follow-Cursor Ambient Glow
      const glowDist = Math.max(width, height) * 0.4;
      const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, glowDist);
      mouseGrad.addColorStop(0, "rgba(70, 100, 150, 0.15)");
      mouseGrad.addColorStop(0.5, "rgba(50, 20, 80, 0.05)");
      mouseGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = mouseGrad;
      ctx.fillRect(0, 0, width, height);
      
      particles.forEach((p, idx) => {
        p.update(mouse, time, width, height);
        p.draw(ctx);

        // Connect nearby clusters mathematically to form structural stardust web 
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = dx * dx + dy * dy;
          if (dist < 10000) { 
            ctx.beginPath();
            ctx.strokeStyle = p.color + (0.08 * (1 - dist / 10000)) + ")";
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
    };
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY + window.scrollY;
    };
    
    // Throw mouse off screen when cursor leaves to remove attraction point
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-[100dvh] pointer-events-none z-10 opacity-90 transition-opacity duration-1000" 
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
