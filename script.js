document.addEventListener('DOMContentLoaded', function () {
    var stepper = new Stepper(document.querySelector('.bs-stepper'))
});

const next = document.querySelector("#next");
const prev = document.querySelector("#previous");

next.addEventListener('click', (e) => {
    var stepper = new Stepper(document.querySelector('.bs-stepper'))
    stepper.next()
});

prev.addEventListener('click', (e) => {
    var stepper = new Stepper(document.querySelector('.bs-stepper'))
    stepper.previous()
});
