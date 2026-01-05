document.addEventListener('DOMContentLoaded', () => {
    const accessButton = document.getElementById('accessButton');
    const biometricStatus = document.getElementById('biometricStatus');
    const moneyNotesContainer = document.getElementById('money-notes-container');

    // Função fictícia para o botão de acesso
    accessButton.addEventListener('click', () => {
        biometricStatus.textContent = "VERIFICANDO IDENTIDADE...";
        biometricStatus.style.color = "#FFD700"; // Amarelo para indicar processamento

        setTimeout(() => {
            biometricStatus.textContent = "ACESSO CONCEDIDO: ARQUITETO PATRICK";
            biometricStatus.style.color = "#00FF00"; // Verde para acesso
            alert("Bem-vindo, Arquiteto Soberano! Protocolos H3X4 Ativados.");
            // Aqui você pode adicionar redirecionamento ou outras ações
        }, 2000); // Simula um atraso de 2 segundos para verificação
    });

    // Função para criar as notas de dinheiro caindo
    function createMoneyNote() {
        const note = document.createElement('div');
        note.classList.add('money-note');
        
        // Assegura que cada nota tenha uma imagem base.
        // Se você tiver uma imagem de nota específica (ex: 100 dólares), use-a.
        // Por exemplo: note.style.backgroundImage = 'url("https://example.com/dollar-bill.png")';
        // Por enquanto, faremos uma base simples ou você pode colocar a URL da sua nota.
        note.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 50\'%3E%3Crect width=\'100\' height=\'50\' fill=\'%23a0c0a0\'/%3E%3Crect x=\'5\' y=\'5\' width=\'90\' height=\'40\' fill=\'%23b0d0b0\'/%3E%3Ctext x=\'50\' y=\'30\' font-family=\'Arial\' font-size=\'15\' fill=\'%23228b22\' text-anchor=\'middle\'%3E%24100%3C/text%3E%3C/svg%3E")';


        note.style.left = Math.random() * 100 + 'vw';
        note.style.animationDuration = (Math.random() * 5 + 5) + 's'; // 5 a 10 segundos
        note.style.animationDelay = (Math.random() * 5) + 's'; // Atraso para aparecerem em momentos diferentes
        moneyNotesContainer.appendChild(note);

        // Remover a nota depois que ela cair para não sobrecarregar o DOM
        note.addEventListener('animationend', () => {
            note.remove();
        });
    }

    // Gerar notas continuamente
    setInterval(createMoneyNote, 500); // Uma nova nota a cada 0.5 segundos

    // Log de diagnóstico
    console.log("Sistema H3X4: Portal Soberano online. Aguardando comando do Arquiteto.");
});
