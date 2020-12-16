let stepper = null;
const nextStep = document.getElementById("next");
const finishStep = document.getElementById("finish");
const resetStep = document.getElementById("reset");

document.addEventListener("DOMContentLoaded", function () {
  var stepperEl = document.getElementById("stepper");
  stepper = new Stepper(stepperEl);

  stepperEl.addEventListener("show.bs-stepper", function (event) {
    let indexStep = event.detail.indexStep;
    
    if (indexStep == 1) {        
        nextStep.classList.add('d-none');
        resetStep.classList.add('d-none');
        finishStep.classList.remove('d-none');
    } else if (indexStep == 2) {
        resetStep.classList.remove('d-none');
        finishStep.classList.add('d-none');
    } else{
        nextStep.classList.remove('d-none');
        finishStep.classList.add('d-none');
        resetStep.classList.add('d-none');
    }
  });
});

finishStep.addEventListener("click", () => {
    let nama = document.querySelector("#nama")?.value;
    let kelas = document.querySelector("#kelas")?.value;
    let salam = document.querySelector(".salam:checked")?.value;
    let nomor = document.querySelector("#nomor")?.value;
    let kelamin = document.querySelector(".kelamin:checked")?.value;
    let pertanyaan = document.querySelector("#pertanyaan")?.value;
    let tujuan = document.querySelector("#tujuan")?.value;
    let ucapan = document.querySelector("#ucapan")?.value;
    let result = document.querySelector("#result");
    
    const ucapanSalam = salam != undefined || '' || null ? 'assalamualakum' : '';  
    const kalimat = `${ucapanSalam} ${kelamin}. Nama saya ${nama}, ${kelas}. ${tujuan} ${pertanyaan}. ${ucapan}`;
    result.value = kalimat;
    stepper.next();
});

resetStep.addEventListener("click", () => {
  document.querySelector("#nama").value = '';
  document.querySelector("#kelas").value = '';
  document.querySelector(".salam:checked").value;
  document.querySelector("#nomor").value = '';
  document.querySelector(".kelamin:checked").value;
  document.querySelector("#pertanyaan").value = '';
  document.querySelector("#tujuan").value = '';
  document.querySelector("#ucapan").value = '';
  document.querySelector("#result").value = '';

  stepper.to(0);
});

const copyToClipboard = () => {
  let result = document.querySelector("#result");
  result.select();
  result.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand("copy");
};

const sendMessage = () => {
  let nomorWa = document.querySelector("#nomor")?.value;
  let resultMsg = document.querySelector("#result")?.value;
  window.open(`http://wa.me/${nomorWa}?text=${resultMsg}`, '_blank');
};