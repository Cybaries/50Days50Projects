const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById('progress')

let currentActive = 1;

prev.addEventListener('click', () => {
    if (currentActive > 1)
        currentActive--;
    update();
})
next.addEventListener('click', () => {
    if (currentActive < circles.length)
        currentActive++;
    update();
})

function update() {
    console.log(currentActive)
    circles.forEach((circle, idx) => {
        if (idx < currentActive ) {
            circle.classList.add('active');
            progress.style.width = (currentActive - 1) * 33.33 + '%';
        }
        else {
            circle.classList.remove('active');
        }
    })

    if (currentActive === 1)
        prev.disabled = true;
    else if (currentActive === circles.length) {
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}