document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('activate-portal');
    const status = document.getElementById('biometric-status');
    const portal = document.getElementById('money-portal');

    function launchNotes() {
        for (let i = 0; i < 35; i++) {
            setTimeout(() => {
                const note = document.createElement('div');
                note.className = 'note';
                note.style.left = Math.random() * 100 + 'vw';
                note.style.animationDuration = (Math.random() * 2 + 2) + 's';
                portal.appendChild(note);
                
                // Limpeza para manter a aba Elements organizada
                note.addEventListener('animationend', () => note.remove());
            }, i * 100);
        }
    }

    btn.addEventListener('click', () => {
        status.innerText = "DNA RECONHECIDO: JOSÉ PATRICK";
        status.style.color = "#00ff00";
        launchNotes();
        console.log("Portal H3X4: Assistência total concedida ao dono.");
    });

    // Diagnóstico
    console.log("1. Aba Elements: Organizada.");
    console.log("2. Aba Network: Independente.");
    console.log("3. Aba Console: Silêncio operacional.");
});
