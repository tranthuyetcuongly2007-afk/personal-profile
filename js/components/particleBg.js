/**
 * AI Neural Background - white theme
 * Draws animated nodes, links, small code chips, neural pulses and circuit traces.
 */
export default class ParticleBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.time = 0;
    this.scrollY = 0;
    this.targetScrollY = 0;
    this.nodes = [];
    this.chips = [];
    this.animationId = null;
    this.isRunning = false;

    this.init();
  }

  init() {
    this.resize();
    this.createScene();
    this.setupEvents();
    this.start();
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.floor(window.innerWidth * dpr);
    this.canvas.height = Math.floor(window.innerHeight * dpr);
    this.canvas.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none;
      z-index: -1;
      opacity: 1;
    `;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  createScene() {
    const nodeCount = Math.max(42, Math.floor((this.width * this.height) / 26000));
    this.nodes = Array.from({ length: nodeCount }, (_, i) => ({
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      vx: (Math.random() - 0.5) * 0.34,
      vy: (Math.random() - 0.5) * 0.34,
      r: 1.7 + Math.random() * 2.6,
      phase: Math.random() * Math.PI * 2,
      type: i % 7 === 0 ? 'core' : 'node'
    }));

    const words = ['AI', 'ML', '{}', '</>', '01', 'GPU', 'API', 'UX', 'DATA'];
    const chipCount = Math.max(10, Math.floor(this.width / 130));
    this.chips = Array.from({ length: chipCount }, (_, i) => ({
      text: words[i % words.length],
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      speed: 0.18 + Math.random() * 0.22,
      phase: Math.random() * Math.PI * 2
    }));
  }

  setupEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createScene();
    });
    window.addEventListener('scroll', () => {
      this.targetScrollY = window.scrollY;
    }, { passive: true });
  }

  update() {
    this.time += 0.012;
    this.scrollY += (this.targetScrollY - this.scrollY) * 0.08;

    for (const n of this.nodes) {
      n.x += n.vx + Math.sin(this.time + n.phase) * 0.05;
      n.y += n.vy + Math.cos(this.time * 0.9 + n.phase) * 0.05;
      if (n.x < -20) n.x = this.width + 20;
      if (n.x > this.width + 20) n.x = -20;
      if (n.y < -20) n.y = this.height + 20;
      if (n.y > this.height + 20) n.y = -20;
    }

    for (const c of this.chips) {
      c.y -= c.speed;
      c.x += Math.sin(this.time + c.phase) * 0.18;
      if (c.y < -40) {
        c.y = this.height + 40;
        c.x = Math.random() * this.width;
      }
    }
  }

  roundedRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  drawCircuitLines() {
    const ctx = this.ctx;
    const offset = (this.time * 18 + this.scrollY * 0.08) % 160;
    ctx.save();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.075)';
    ctx.beginPath();
    for (let y = -160; y < this.height + 160; y += 160) {
      const yy = y + offset;
      ctx.moveTo(0, yy);
      ctx.lineTo(this.width * 0.18, yy);
      ctx.lineTo(this.width * 0.26, yy + 34);
      ctx.lineTo(this.width * 0.48, yy + 34);
      ctx.lineTo(this.width * 0.56, yy - 18);
      ctx.lineTo(this.width, yy - 18);
    }
    ctx.stroke();
    ctx.restore();
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    const bg = ctx.createLinearGradient(0, 0, this.width, this.height);
    bg.addColorStop(0, '#ffffff');
    bg.addColorStop(0.48, '#f0f9ff');
    bg.addColorStop(1, '#f5f3ff');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, this.width, this.height);

    this.drawCircuitLines();

    // Links
    const maxDist = Math.min(170, this.width * 0.13);
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const a = this.nodes[i];
        const b = this.nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.20;
          ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y - this.scrollY * 0.02);
          ctx.lineTo(b.x, b.y - this.scrollY * 0.02);
          ctx.stroke();
        }
      }
    }

    // Pulse rings
    for (let i = 0; i < 4; i++) {
      const n = this.nodes[(i * 9 + Math.floor(this.time * 2)) % this.nodes.length];
      if (!n) continue;
      const radius = 18 + ((this.time * 42 + i * 24) % 80);
      const alpha = Math.max(0, 0.16 - radius / 620);
      ctx.strokeStyle = `rgba(236, 72, 153, ${alpha})`;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Nodes
    for (const n of this.nodes) {
      const pulse = Math.sin(this.time * 2 + n.phase) * 0.6;
      ctx.beginPath();
      ctx.fillStyle = n.type === 'core' ? 'rgba(99, 102, 241, 0.72)' : 'rgba(14, 165, 233, 0.54)';
      ctx.arc(n.x, n.y - this.scrollY * 0.02, n.r + pulse, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.arc(n.x - 0.6, n.y - 0.7 - this.scrollY * 0.02, 1, 0, Math.PI * 2);
      ctx.fill();
    }

    // Floating AI chips
    ctx.font = '600 12px Inter, Segoe UI, sans-serif';
    ctx.textBaseline = 'middle';
    for (const c of this.chips) {
      const w = ctx.measureText(c.text).width + 22;
      const h = 26;
      const x = c.x;
      const y = c.y + Math.sin(this.time + c.phase) * 7;
      ctx.save();
      ctx.globalAlpha = 0.58;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.72)';
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.14)';
      ctx.lineWidth = 1;
      this.roundedRect(ctx, x, y, w, h, 13);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = 'rgba(99, 102, 241, 0.72)';
      ctx.fillText(c.text, x + 11, y + h / 2);
      ctx.restore();
    }
  }

  animate() {
    if (!this.isRunning) return;
    this.update();
    this.draw();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  start() {
    this.isRunning = true;
    this.animate();
  }

  stop() {
    this.isRunning = false;
    if (this.animationId) cancelAnimationFrame(this.animationId);
  }
}
