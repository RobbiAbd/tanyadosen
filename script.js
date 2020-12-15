let stepper = null;
const nextStep = document.getElementById("next");
const finishStep = document.getElementById("finish");

document.addEventListener("DOMContentLoaded", function () {
  var stepperEl = document.getElementById("stepper");
  stepper = new Stepper(stepperEl);

  stepperEl.addEventListener("show.bs-stepper", function (event) {
    let indexStep = event.detail.indexStep;

    if (indexStep == 1) {
        nextStep.classList.toggle('d-none');
        finishStep.classList.toggle('d-none');
    }else{
        nextStep.classList.toggle('d-none');
        finishStep.classList.toggle('d-none');
    }
  });
});

finishStep.addEventListener("click", () => {
    console.log('hore')
});

/**
 * assalamualakum pak/buk. Nama saya {nama}, dari kelas {kelas}. {urusan} {pertanyaan} {ucapanPenutup}
 * 
 * Assalamualaikum pak. Nama saya robbi, dari kelas Rpl 2. ingin tanya pelajar mtk di kumpulkan ke siapa ya ? oke pak terima kasih
 */