const canvas = document.getElementById('vortex-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const particleCount = 150;

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 0.5 + 0.2;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = Math.random() * 0.02 + 0.01;
        this.distance = Math.random() * canvas.width / 2;
    }
    update() {
        this.angle += this.spin;
        this.x = canvas.width / 2 + Math.cos(this.angle) * this.distance;
        this.y = canvas.height / 2 + Math.sin(this.angle) * this.distance;
        if (this.distance > 0) this.distance -= this.speed;
        else this.reset();
    }
    draw() {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();

// Lógica do Botão e Chuva de Dinheiro
const btn = document.getElementById('activate-portal');
const statusText = document.getElementById('biometric-status');
const moneyPortal = document.getElementById('money-portal');

btn.addEventListener('click', () => {
    statusText.innerText = "DNA IDENTIFICADO: JOSÉ PATRICK";
    statusText.style.color = "#00ff00";
    
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const note = document.createElement('div');
            note.className = 'note';
            note.style.left = Math.random() * 100 + 'vw';
            note.style.animationDuration = (Math.random() * 2 + 2) + 's';
            moneyPortal.appendChild(note);
            note.addEventListener('animationend', () => note.remove());
        }, i * 100);
    }
    console.log("Acesso total concedido ao Arquiteto.");
});
