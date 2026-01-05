const canvas = document.getElementById("portalCanvas");
const ctx = canvas.getContext("2d");
let w, h, particles = [];
const chars = "01X4789".split("");

function init() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    particles = [];
    for(let i = 0; i < 800; i++) {
        particles.push({
            r: Math.random() * Math.max(w, h),
            angle: Math.random() * Math.PI * 2,
            speed: 0.005 + Math.random() * 0.002,
            size: Math.random() * 8 + 4,
            c: chars[Math.floor(Math.random() * chars.length)]
        });
    }
}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, w, h);
    
    particles.forEach(p => {
        p.angle += p.speed;
        p.r -= 2.5;
        if(p.r < 10) p.r = Math.max(w, h) * 0.9;

        const x = w / 2 + Math.cos(p.angle) * p.r;
        const y = h / 2 + Math.sin(p.angle) * p.r;

        ctx.fillStyle = "#8b0000";
        ctx.font = p.size + "px monospace";
        ctx.fillText(p.c, x, y);
    });
    requestAnimationFrame(draw);
}

document.getElementById('dna-verify').addEventListener('click', () => {
    // Efeito de chuva de dinheiro
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const m = document.createElement('div');
            m.className = 'money';
            m.style.left = Math.random() * 100 + 'vw';
            m.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
            document.body.appendChild(m);
            m.addEventListener('animationend', () => m.remove());
        }, i * 100);
    }
});

window.addEventListener("resize", init);
init();
draw();
