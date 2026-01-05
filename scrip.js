document.addEventListener('DOMContentLoaded', () => {
    const authBtn = document.getElementById('auth-trigger');
    const statusText = document.getElementById('status-text');
    const rainContainer = document.getElementById('money-rain');

    function createRain() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const bill = document.createElement('div');
                bill.classList.add('bill');
                bill.style.left = Math.random() * 100 + 'vw';
                bill.style.animationDuration = (Math.random() * 3 + 2) + 's';
                rainContainer.appendChild(bill);
                bill.addEventListener('animationend', () => bill.remove());
            }, i * 150);
        }
    }

    authBtn.addEventListener('click', () => {
        statusText.innerText = "DNA RECONHECIDO: JOSÉ PATRICK";
        statusText.style.color = "#00ff00";
        createRain();
        console.log("H3X4: Acesso soberano confirmado.");
    });
});
