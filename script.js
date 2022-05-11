document.querySelector(".submit").addEventListener("click", function() {
   
    let height = document.querySelector("#input-height").value;
    let weight = document.querySelector("#input-weight").value;

    // BMI = mass / (height * height)
    const calcBMI = function(weight, height) {
       const bmi = weight / (height * height);
       console.log(bmi);
    
    const textBMI = function () {
      document.querySelector(".show-bmi").textContent = `BMI: ${Math.round((bmi+ Number.EPSILON) * 100) / 100}`;
    }

    let showBMI = document.querySelector(".show-bmi");
    let textHealth = document.querySelector(".text-health");

       if (bmi < 18.5) {
        showBMI.style.color = "orange";
        textHealth.textContent = "Underweight";
        textHealth.style.color = "orange";
        textBMI();
      } else if (18.5<= bmi && bmi <=24.9) {
        showBMI.style.color = "green";
        textHealth.textContent = "Healthy";
        textHealth.style.color = "green";
        textBMI();
      } else if (25<= bmi && bmi <=29.9) {
        showBMI.style.color = "orange";
        textHealth.textContent = "Slightly Overweight";
        textHealth.style.color = "orange";
        textBMI();
      } else if (30<= bmi && bmi <=34.9) {
        showBMI.style.color = "red";
        textHealth.style.color = "red";
        textHealth.textContent = "Overweight";
        textBMI();
      } else if (35 <= bmi) {
        showBMI.style.color = "darkred";
        textHealth.style.color = "darkred";
        textHealth.textContent = "Obese";
        textBMI();
      }
    }
    calcBMI(weight, height);
    openModal();
})


// Modal

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
