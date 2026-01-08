document.addEventListener("DOMContentLoaded", function() {
    
    // Teste para ver se o arquivo carregou
    console.log("Sistema EcoCachoeiras iniciado...");

    // === LÓGICA DO FILTRO DE BUSCA ===
    const searchInput = document.getElementById('search-input');

    // Verifica se a barra existe
    if (searchInput) {
        console.log("Barra de pesquisa encontrada! Ativando filtro.");

        searchInput.addEventListener('input', function() {
            const valorDigitado = searchInput.value.toLowerCase();
            const cards = document.querySelectorAll('.card');

            cards.forEach(card => {
                const titulo = card.querySelector('h3').textContent.toLowerCase();
                
                if (titulo.includes(valorDigitado)) {
                    card.style.display = 'block'; // Mostra
                } else {
                    card.style.display = 'none';  // Esconde
                }
            });
        });
    } else {
        // Se cair aqui, é porque faltou o HTML do input
        console.log("Aviso: Barra de pesquisa não encontrada nesta página.");
    }
});