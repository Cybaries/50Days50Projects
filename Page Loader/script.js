let bg = document.querySelector('.container');
let loader = document.querySelector('.loader');

let load = 0;
let int = setInterval(count, 30);

function count() {
    load++;
    if (load > 99)
        clearInterval(int);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    loader.innerHTML = `${load}%`;
    loader.style.opacity = scale(load, 0, 100, 100, 0);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }