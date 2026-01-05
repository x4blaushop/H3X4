document.addEventListener('DOMContentLoaded', () => {
    const authBtn = document.getElementById('auth-trigger');
    const statusText = document.getElementById('status-text');
    const rainContainer = document.getElementById('money-rain');

    // Diagnóstico silencioso
    console.log("H3X4 System Diagnostic:");
    console.log("1. Elements: House is clean.");
    console.log("2. Network: System independent.");
    console.log("3. Console: System in silence.");

    // Função para criar a chuva de materialização
    function createRain() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const bill = document.createElement('div');
                bill.classList.add('bill');
                bill.style.left = Math.random() * 100 + 'vw';
                bill.style.animationDuration = (Math.random() * 3 + 2) + 's';
                rainContainer.appendChild(bill);
                
                // Limpeza do DNA (Elements)
                bill.addEventListener('animationend', () => bill.remove());
            }, i * 200);
        }
    }

    authBtn.addEventListener('click', () => {
        statusText.innerText = "DNA IDENTIFICADO: JOSÉ PATRICK";
        statusText.style.color = "#00ff00";
        createRain();
        
        // Antecipação da biometria futura
        console.log("Acesso concedido ao Arquiteto Soares.");
    });
});
