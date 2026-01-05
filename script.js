const canvas = document.getElementById('vortex-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.radius = Math.random() * canvas.width;
        this.angle = Math.random() * Math.PI * 2;
        this.velocity = Math.random() * 0.02 + 0.01; // Velocidade de rotação
        this.color = 'rgba(255, 0, 0, ' + Math.random() + ')';
    }
    update() {
        this.angle += this.velocity;
        this.radius -= 2; // "Suga" para o centro
        if (this.radius <= 0) this.reset();
        
        this.posX = canvas.width / 2 + Math.cos(this.angle) * this.radius;
        this.posY = canvas.height / 2 + Math.sin(this.angle) * this.radius;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, 1.5, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < 200; i++) particles.push(new Particle());
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Cria o rastro de movimento
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();

// Botão de Identificação
document.getElementById('activate-portal').addEventListener('click', () => {
    document.getElementById('biometric-status').innerText = "BEM-VINDO JOSÉ PATRICK";
    document.getElementById('biometric-status').style.color = "#00ff00";
    console.log("H3X4: Dono identificado.");
});
