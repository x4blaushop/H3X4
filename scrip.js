document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('activate-btn');
    const status = document.getElementById('status');
    const container = document.getElementById('money-flow');

    function createMoney() {
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                const bill = document.createElement('div');
                bill.className = 'falling-bill';
                bill.style.left = Math.random() * 100 + 'vw';
                bill.style.animationDuration = (Math.random() * 2 + 2) + 's';
                container.appendChild(bill);
                bill.addEventListener('animationend', () => bill.remove());
            }, i * 100);
        }
    }

    btn.addEventListener('click', () => {
        status.innerText = "SISTEMA SOBERANO ATIVO";
        status.style.color = "#00ff00";
        createMoney();
        console.log("H3X4: Dono José Patrick identificado.");
    });
});
