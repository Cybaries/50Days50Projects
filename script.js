let x = {
    'Expanding Cards': './Expanding Cards/index.html',
    'Rotating Navigation': './Rotating Navigation/index.html',
    'Progressing Steps': './Progressing Steps/index.html',
    'Hidden Search Bar': './Hidden Search Bar/index.html',
    'Page Loader': './Page Loader/index.html'
};
let cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('click', () => {
        if (x[ card.textContent ] != null)
        location.href = x[ card.textContent ];
    })
})