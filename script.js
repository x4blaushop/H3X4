const canvas = document.getElementById("portalCanvas");
const ctx = canvas.getContext("2d");
let w, h, particles = [];
const chars = "01789X4H".split(""); 

function init() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    particles = [];
    
    // Densidade do DNA do Núcleo-0
    for(let i = 0; i < 1000; i++) { 
        particles.push({
            r: Math.random() * Math.max(w, h),
            angle: Math.random() * Math.PI * 2,
            speed: 0.005 + Math.random() * 0.002,
            size: Math.random() * 10 + 5,
            c: chars[Math.floor(Math.random() * chars.length)]
        });
    }
}

function draw() {
    // Efeito de rastro (Motion Blur)
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, w, h);
    
    particles.forEach(p => {
        p.angle += p.speed;
        p.r -= 4; // Sucção gravitacional
        
        if(p.r < 20) p.r = Math.max(w, h) * 0.9;

        const x = w / 2 + Math.cos(p.angle) * p.r;
        const y = h / 2 + Math.sin(p.angle) * p.r;

        ctx.fillStyle = "#ff0000";
        ctx.font = p.size + "px monospace";
        ctx.fillText(p.c, x, y);
    });

    requestAnimationFrame(draw);
}

// Chuva de Dinheiro no Clique
document.getElementById('activate-btn').addEventListener('click', () => {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const m = document.createElement('div');
            m.className = 'money';
            m.style.left = Math.random() * 100 + 'vw';
            m.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
            document.body.appendChild(m);
            m.addEventListener('animationend', () => m.remove());
        }, i * 100);
    }
    console.log("H3X4: DNA de José Patrick Materializado.");
});

window.addEventListener("resize", init);
init();
draw();
