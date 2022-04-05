const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkbox)

checkbox()
function checkbox() {
    const trigger = window.innerHeight/5*4
    console.log(trigger)
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < trigger) {
            box.classList.add('show')
        }
        else {
            box.classList.remove('show') 
        }
    })
}