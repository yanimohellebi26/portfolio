import React, { useEffect, useRef } from 'react';
import './AIBackground.css';

const AIBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let connections = [];
    let nodes = [];
    let mouseX = -1000;
    let mouseY = -1000;
    
    // Système de modes alternés
    let currentMode = 0;
    let modeTransitionProgress = 0;
    const modes = ['neural', 'matrix', 'tensors', 'knowledge', 'circuit'];
    const modeDuration = 15000; // 15 secondes par mode
    let lastModeChange = Date.now();
    
    // Variables pour chaque mode
    let matrixColumns = [];
    let tensors = [];
    let knowledgeNodes = [];
    let circuitPaths = [];

    // Redimensionner le canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
      initNodes();
      initMatrix();
      initTensors();
      initKnowledgeGraph();
      initCircuits();
    };

    // Classe pour les particules de données
    class DataParticle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = this.getRandomColor();
      }

      getRandomColor() {
        const colors = [
          'rgba(199, 112, 240, ', // violet
          'rgba(165, 128, 255, ', // purple
          'rgba(40, 198, 255, ',  // cyan
          'rgba(236, 72, 153, ',  // pink
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Rebond sur les bords
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Attraction vers la souris
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          this.vx += (dx / distance) * force * 0.02;
          this.vy += (dy / distance) * force * 0.02;
        }

        // Limiter la vitesse
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > 2) {
          this.vx = (this.vx / speed) * 2;
          this.vy = (this.vy / speed) * 2;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.opacity + ')';
        ctx.fill();

        // Effet de halo
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color + (this.opacity * 0.2) + ')';
        ctx.fill();
      }
    }

    // Classe pour les nœuds du réseau neuronal
    class NeuralNode {
      constructor(x, y, layer) {
        this.x = x;
        this.y = y;
        this.layer = layer;
        this.size = Math.random() * 4 + 3;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.baseOpacity = Math.random() * 0.3 + 0.4;
      }

      update() {
        this.pulsePhase += this.pulseSpeed;
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        const size = this.size * pulse;
        const opacity = this.baseOpacity * pulse;

        // Nœud principal
        ctx.beginPath();
        ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, size);
        gradient.addColorStop(0, `rgba(199, 112, 240, ${opacity})`);
        gradient.addColorStop(1, `rgba(199, 112, 240, 0)`);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Halo externe
        ctx.beginPath();
        ctx.arc(this.x, this.y, size * 2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(199, 112, 240, ${opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    // Initialiser les particules
    const initParticles = () => {
      const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 15000));
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new DataParticle());
      }
    };

    // Initialiser les nœuds du réseau neuronal
    const initNodes = () => {
      nodes = [];
      const layers = 5;
      const nodesPerLayer = [8, 12, 15, 12, 8];
      const spacing = canvas.width / (layers + 1);

      for (let layer = 0; layer < layers; layer++) {
        const nodeCount = nodesPerLayer[layer];
        const layerSpacing = canvas.height / (nodeCount + 1);
        
        for (let i = 0; i < nodeCount; i++) {
          const x = spacing * (layer + 1);
          const y = layerSpacing * (i + 1);
          nodes.push(new NeuralNode(x, y, layer));
        }
      }
    };

    // ============ CLASSE MATRIX CODE FLOW ============
    class MatrixColumn {
      constructor(x) {
        this.x = x;
        this.y = Math.random() * -canvas.height;
        this.speed = Math.random() * 3 + 2;
        this.chars = '01アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.length = Math.floor(Math.random() * 15) + 10;
        this.opacity = Math.random() * 0.7 + 0.3;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height + this.length * 20) {
          this.y = -this.length * 20;
          this.speed = Math.random() * 3 + 2;
        }
      }

      draw() {
        for (let i = 0; i < this.length; i++) {
          const char = this.chars[Math.floor(Math.random() * this.chars.length)];
          const y = this.y + i * 20;
          const opacity = (this.length - i) / this.length * this.opacity;
          
          if (y > 0 && y < canvas.height) {
            ctx.fillStyle = i === 0 ? 
              `rgba(200, 255, 200, ${opacity})` : 
              `rgba(0, 255, 100, ${opacity * 0.6})`;
            ctx.font = '16px monospace';
            ctx.fillText(char, this.x, y);
          }
        }
      }
    }

    // ============ CLASSE 3D TENSORS ============
    class Tensor3D {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 200;
        this.size = Math.random() * 40 + 30;
        this.rotationX = Math.random() * Math.PI * 2;
        this.rotationY = Math.random() * Math.PI * 2;
        this.rotationZ = Math.random() * Math.PI * 2;
        this.rotationSpeedX = (Math.random() - 0.5) * 0.02;
        this.rotationSpeedY = (Math.random() - 0.5) * 0.02;
        this.rotationSpeedZ = (Math.random() - 0.5) * 0.02;
        this.color = this.getRandomColor();
      }

      getRandomColor() {
        const colors = [
          'rgba(199, 112, 240,',
          'rgba(40, 198, 255,',
          'rgba(165, 128, 255,',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.rotationX += this.rotationSpeedX;
        this.rotationY += this.rotationSpeedY;
        this.rotationZ += this.rotationSpeedZ;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        
        const scale = 1 - this.z / 400;
        const opacity = 0.3 * scale;
        
        // Dessiner un cube en wireframe
        const s = this.size * scale;
        const vertices = [
          [-s/2, -s/2, -s/2], [s/2, -s/2, -s/2],
          [s/2, s/2, -s/2], [-s/2, s/2, -s/2],
          [-s/2, -s/2, s/2], [s/2, -s/2, s/2],
          [s/2, s/2, s/2], [-s/2, s/2, s/2]
        ];

        // Rotation simplifiée
        const cos = Math.cos(this.rotationY);
        const sin = Math.sin(this.rotationY);
        
        const edges = [
          [0,1],[1,2],[2,3],[3,0],[4,5],[5,6],
          [6,7],[7,4],[0,4],[1,5],[2,6],[3,7]
        ];

        ctx.strokeStyle = this.color + opacity + ')';
        ctx.lineWidth = 2;
        
        edges.forEach(([i, j]) => {
          ctx.beginPath();
          ctx.moveTo(vertices[i][0] * cos, vertices[i][1]);
          ctx.lineTo(vertices[j][0] * cos, vertices[j][1]);
          ctx.stroke();
        });

        ctx.restore();
      }
    }

    // ============ CLASSE KNOWLEDGE GRAPH ============
    class KnowledgeNode {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 8;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.connections = [];
        this.label = ['AI', 'ML', 'DL', 'NLP', 'CV', 'RL', 'Data', 'GPU'][Math.floor(Math.random() * 8)];
        this.color = Math.random() > 0.5 ? 
          'rgba(199, 112, 240,' : 
          'rgba(40, 198, 255,';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        // Nœud
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + '0.4)';
        ctx.fill();
        ctx.strokeStyle = this.color + '0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Label
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(this.label, this.x, this.y + 4);
      }
    }

    // ============ CLASSE CIRCUIT BOARD ============
    class CircuitPath {
      constructor() {
        this.points = [];
        const numPoints = Math.floor(Math.random() * 5) + 3;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        
        for (let i = 0; i < numPoints; i++) {
          this.points.push({x, y});
          x += (Math.random() - 0.5) * 200;
          y += (Math.random() - 0.5) * 200;
        }
        
        this.progress = 0;
        this.speed = Math.random() * 0.005 + 0.002;
        this.color = Math.random() > 0.5 ? 
          'rgba(199, 112, 240,' : 
          'rgba(40, 198, 255,';
      }

      update() {
        this.progress += this.speed;
        if (this.progress > 1) this.progress = 0;
      }

      draw() {
        // Tracer le chemin
        ctx.strokeStyle = this.color + '0.2)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
          ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.stroke();

        // Signal qui se déplace
        const totalLength = this.points.length - 1;
        const currentIndex = Math.floor(this.progress * totalLength);
        const nextIndex = currentIndex + 1;
        
        if (nextIndex < this.points.length) {
          const t = (this.progress * totalLength) - currentIndex;
          const x = this.points[currentIndex].x + (this.points[nextIndex].x - this.points[currentIndex].x) * t;
          const y = this.points[currentIndex].y + (this.points[nextIndex].y - this.points[currentIndex].y) * t;
          
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = this.color + '0.9)';
          ctx.fill();
          
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.strokeStyle = this.color + '0.5)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // ============ FONCTIONS D'INITIALISATION ============
    const initMatrix = () => {
      matrixColumns = [];
      const columnCount = Math.floor(canvas.width / 20);
      for (let i = 0; i < columnCount; i++) {
        matrixColumns.push(new MatrixColumn(i * 20));
      }
    };

    const initTensors = () => {
      tensors = [];
      const tensorCount = Math.min(15, Math.floor(canvas.width / 100));
      for (let i = 0; i < tensorCount; i++) {
        tensors.push(new Tensor3D());
      }
    };

    const initKnowledgeGraph = () => {
      knowledgeNodes = [];
      const nodeCount = Math.min(25, Math.floor(canvas.width / 50));
      for (let i = 0; i < nodeCount; i++) {
        knowledgeNodes.push(new KnowledgeNode());
      }
    };

    const initCircuits = () => {
      circuitPaths = [];
      const pathCount = Math.min(20, Math.floor(canvas.width / 80));
      for (let i = 0; i < pathCount; i++) {
        circuitPaths.push(new CircuitPath());
      }
    };

    // Dessiner les connexions entre particules
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(199, 112, 240, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    // Dessiner les connexions neuronales
    const drawNeuralConnections = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = 0; j < nodes.length; j++) {
          if (nodes[i].layer === nodes[j].layer - 1) {
            const opacity = Math.random() * 0.05 + 0.02;
            const pulse = Math.sin(Date.now() * 0.001 + i * 0.1) * 0.5 + 0.5;
            
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            
            const gradient = ctx.createLinearGradient(
              nodes[i].x, nodes[i].y,
              nodes[j].x, nodes[j].y
            );
            gradient.addColorStop(0, `rgba(199, 112, 240, ${opacity * pulse})`);
            gradient.addColorStop(0.5, `rgba(165, 128, 255, ${opacity * pulse * 1.5})`);
            gradient.addColorStop(1, `rgba(40, 198, 255, ${opacity * pulse})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    // Dessiner du code binaire qui défile
    const drawBinaryRain = () => {
      const time = Date.now() * 0.001;
      ctx.font = '12px "Courier New", monospace';
      ctx.textAlign = 'center';
      
      for (let i = 0; i < 20; i++) {
        const x = (i / 20) * canvas.width;
        const y = ((time * 50 + i * 100) % canvas.height);
        const binary = Math.random() > 0.5 ? '1' : '0';
        const opacity = Math.max(0, 1 - (y / canvas.height)) * 0.15;
        
        ctx.fillStyle = `rgba(40, 198, 255, ${opacity})`;
        ctx.fillText(binary, x, y);
      }
    };

    // Animation principale avec système de modes alternés
    const animate = () => {
      // Gestion du changement de mode
      const now = Date.now();
      if (now - lastModeChange > modeDuration) {
        currentMode = (currentMode + 1) % modes.length;
        lastModeChange = now;
        modeTransitionProgress = 0;
      }
      
      // Progression de la transition (fade in/out)
      const timeSinceChange = now - lastModeChange;
      if (timeSinceChange < 2000) {
        modeTransitionProgress = timeSinceChange / 2000; // Fade in pendant 2s
      } else if (timeSinceChange > modeDuration - 2000) {
        modeTransitionProgress = 1 - (timeSinceChange - (modeDuration - 2000)) / 2000; // Fade out
      } else {
        modeTransitionProgress = 1;
      }

      // Fond semi-transparent pour effet de traînée
      ctx.fillStyle = 'rgba(15, 11, 34, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Sauvegarder l'opacité globale
      ctx.save();
      ctx.globalAlpha = modeTransitionProgress;

      // Dessiner selon le mode actuel
      const mode = modes[currentMode];
      
      if (mode === 'neural') {
        // MODE RÉSEAU NEURONAL
        drawNeuralConnections();
        nodes.forEach(node => {
          node.update();
          node.draw();
        });
        drawConnections();
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });
        
        // Afficher le nom du mode
        ctx.globalAlpha = modeTransitionProgress * 0.4;
        ctx.fillStyle = 'rgba(199, 112, 240, 0.6)';
        ctx.font = '12px monospace';
        ctx.textAlign = 'right';
        ctx.fillText('Neural Network', canvas.width - 20, 30);
        
      } else if (mode === 'matrix') {
        // MODE MATRIX CODE
        matrixColumns.forEach(col => {
          col.update();
          col.draw();
        });
        
        ctx.globalAlpha = modeTransitionProgress * 0.4;
        ctx.fillStyle = 'rgba(0, 255, 100, 0.6)';
        ctx.font = '12px monospace';
        ctx.textAlign = 'right';
        ctx.fillText('Data Stream', canvas.width - 20, 30);
        
      } else if (mode === 'tensors') {
        // MODE TENSEURS 3D
        tensors.forEach(tensor => {
          tensor.update();
          tensor.draw();
        });
        
        // Connexions entre tenseurs
        ctx.globalAlpha = modeTransitionProgress * 0.15;
        for (let i = 0; i < tensors.length; i++) {
          for (let j = i + 1; j < tensors.length; j++) {
            const dx = tensors[i].x - tensors[j].x;
            const dy = tensors[i].y - tensors[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 250) {
              ctx.beginPath();
              ctx.moveTo(tensors[i].x, tensors[i].y);
              ctx.lineTo(tensors[j].x, tensors[j].y);
              ctx.strokeStyle = 'rgba(165, 128, 255, 0.2)';
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
        
        ctx.globalAlpha = modeTransitionProgress * 0.4;
        ctx.fillStyle = 'rgba(165, 128, 255, 0.6)';
        ctx.font = '12px monospace';
        ctx.textAlign = 'right';
        ctx.fillText('Deep Learning Tensors', canvas.width - 20, 30);
        
      } else if (mode === 'knowledge') {
        // MODE GRAPHE DE CONNAISSANCES
        // Dessiner les connexions
        ctx.globalAlpha = modeTransitionProgress * 0.2;
        for (let i = 0; i < knowledgeNodes.length; i++) {
          for (let j = i + 1; j < knowledgeNodes.length; j++) {
            const dx = knowledgeNodes[i].x - knowledgeNodes[j].x;
            const dy = knowledgeNodes[i].y - knowledgeNodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200) {
              ctx.beginPath();
              ctx.moveTo(knowledgeNodes[i].x, knowledgeNodes[i].y);
              ctx.lineTo(knowledgeNodes[j].x, knowledgeNodes[j].y);
              ctx.strokeStyle = 'rgba(199, 112, 240, 0.3)';
              ctx.lineWidth = 1.5;
              ctx.stroke();
            }
          }
        }
        
        ctx.globalAlpha = modeTransitionProgress;
        knowledgeNodes.forEach(node => {
          node.update();
          node.draw();
        });
        
        ctx.globalAlpha = modeTransitionProgress * 0.4;
        ctx.fillStyle = 'rgba(40, 198, 255, 0.6)';
        ctx.font = '12px monospace';
        ctx.textAlign = 'right';
        ctx.fillText('Knowledge Graph', canvas.width - 20, 30);
        
      } else if (mode === 'circuit') {
        // MODE CIRCUIT BOARD
        circuitPaths.forEach(path => {
          path.update();
          path.draw();
        });
        
        ctx.globalAlpha = modeTransitionProgress * 0.4;
        ctx.fillStyle = 'rgba(40, 198, 255, 0.6)';
        ctx.font = '12px monospace';
        ctx.textAlign = 'right';
        ctx.fillText('Circuit Board', canvas.width - 20, 30);
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Gestion de la souris
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    // Initialisation
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animate();

    // Nettoyage
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="ai-background-canvas"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div className="ai-background-overlay" />
      <div className="ai-background-vignette" />
    </>
  );
};

export default AIBackground;
