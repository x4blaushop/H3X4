// Gerador de Chuva de Dinheiro
function createMoney() {
    const rainContainer = document.getElementById('moneyRain');
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const bill = document.createElement('div');
            bill.classList.add('bill');
            bill.style.left = Math.random() * 100 + 'vw';
            bill.style.animationDuration = (Math.random() * 3 + 2) + 's';
            rainContainer.appendChild(bill);
            
            bill.addEventListener('animationend', () => bill.remove());
        }, i * 200);
    }
}

function initDNA() {
    const status = document.getElementById('statusText');
    status.innerText = "ESCANNEANDO DNA...";
    status.style.color = "yellow";

    setTimeout(() => {
        status.innerText = "DONO RECONHECIDO: JOSÉ PATRICK";
        status.style.color = "#00ff00";
        createMoney(); // Começa a chover dinheiro ao reconhecer
        console.log("H3X4: DNA Identificado com sucesso.");
    }, 2000);
}

// Log de Diagnóstico Soberano
console.log("1. Aba Elements: Casa limpa.");
console.log("2. Aba Network: Sistema independente.");
console.log("3. Aba Console: Sistema em silêncio.");
