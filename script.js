var splide = new Splide('.splide', {
    perPage: 4,
    rewind: true,
});

splide.mount();

function updatePerPage() {
    if (window.innerWidth <= 768) { // Para telas de celular
        splide.options = { perPage: 3 };
    } else if (window.innerWidth > 768 && window.innerWidth <= 968) { // Para telas intermediárias, como tablets
        splide.options = { perPage: 3 };
    } else if (window.innerWidth > 968 && window.innerWidth <= 1460) { // Para telas maiores, como laptops
        splide.options = { perPage: 3 };
    } else { // Para telas maiores que 1400px, como desktops
        splide.options = { perPage: 4 };
    }
}

// Chamar a função ao carregar a página e quando a janela for redimensionada
window.addEventListener('resize', updatePerPage);
updatePerPage();
