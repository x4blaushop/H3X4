const canvas = document.getElementById("portalCanvas");
const ctx = canvas.getContext("2d");
let w, h, particles = [];
const dnaChars = "01X47H3X4".split(""); // DNA personalizado H3X4

function init() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    particles = [];
    
    for(let i = 0; i < 1200; i++) { 
        particles.push({
            r: Math.random() * Math.max(w, h),
            angle: Math.random() * Math.PI * 2,
            speed: 0.004 + Math.random() * 0.003,
            size: Math.random() * 10 + 5,
            c: dnaChars[Math.floor(Math.random() * dnaChars.length)]
        });
    }
}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // Rastro de movimento
    ctx.fillRect(0, 0, w, h);
    
    particles.forEach(p => {
        p.angle += p.speed;
        p.r -= 3; // Velocidade de sucção para o centro
        
        if(p.r < 30) {
            p.r = Math.max(w, h) * 0.9;
        }

        const x = w / 2 + Math.cos(p.angle) * p.r;
        const y = h / 2 + Math.sin(p.angle) * p.r;

        ctx.fillStyle = "#ff0000"; // Vermelho H3X4
        ctx.font = p.size + "px monospace";
        ctx.fillText(p.c, x, y);
    });

    requestAnimationFrame(draw);
}

// Chuva de Notas
function createMoney() {
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const note = document.createElement('div');
            note.className = 'money-note';
            note.style.left = Math.random() * 100 + 'vw';
            note.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(note);
            note.addEventListener('animationend', () => note.remove());
        }, i * 100);
    }
}

document.getElementById('activate-btn').addEventListener('click', () => {
    document.getElementById('biometric-status').innerText = "DNA IDENTIFICADO: JOSÉ PATRICK";
    document.getElementById('biometric-status').style.color = "#00ff00";
    createMoney();
});

window.addEventListener("resize", init);
init();
draw();
