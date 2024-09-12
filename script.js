document.addEventListener('DOMContentLoaded', function () {
    var splides = [];
    
    document.querySelectorAll('.splide').forEach(function (splideElement, index) {
        // Inicializa uma nova instância de Splide para cada elemento .splide
        var splide = new Splide(splideElement, {
            perPage: 4,
            rewind: true,
        });
        splide.mount();
        splides.push(splide); // Armazena a instância para uso posterior
    });

    // Função para atualizar o perPage de cada slider
    function updatePerPage() {
        splides.forEach(function (splide) {
            if (window.innerWidth <= 768) { // Para telas de celular
                splide.options = { perPage: 2 };
            } else if (window.innerWidth > 768 && window.innerWidth <= 968) { // Para telas intermediárias
                splide.options = { perPage: 3 };
            } else if (window.innerWidth > 968 && window.innerWidth <= 1460) { // Para laptops
                splide.options = { perPage: 3 };
            } else { // Para desktops maiores
                splide.options = { perPage: 4 };
            }
        });
    }

    // Chamar a função ao carregar a página e quando a janela for redimensionada
    window.addEventListener('resize', updatePerPage);
    updatePerPage();
});
