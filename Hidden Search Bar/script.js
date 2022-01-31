const input = document.querySelector('.input');
const search = document.getElementById('button');
let n = 0;
search.addEventListener('click', () => {
    if (n == 0) {
        input.classList.add('search-bar');
        search.classList.add('search');
    }
    else {
        input.classList.remove('search-bar');
        search.classList.remove('search');
    }
    n = n>0? 0:1;
    
})