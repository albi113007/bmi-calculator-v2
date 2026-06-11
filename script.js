const btnE1 = document.getElementById("btn");
const bmiInputE1 = document.getElementById("BMI-RESULT");
const weightconditionE1 = document.getElementById("weight-condition");

const HEIGHTValue = parseFloat(document.getElementById("HEIGHT").value) / 100;
const WEIGHTValue = parseFloat(document.getElementById("WEIGHT").value);


function calculateBMI(){
    const HEIGHTValue = document.getElementById ("HEIGHT").value / 100
const WEIGHTValue = document.getElementById ("WEIGHT").value

const BMIvalue = WEIGHTValue / (HEIGHTValue * HEIGHTValue);


bmiInputE1.value = BMIvalue;

if(BMIvalue < 18.5) {
    weightconditionE1.innerText = "under weight";
} else if (BMIvalue >= 18.5 && BMIvalue <= 24.9){
    weightconditionE1.innerText = "Normal weight";
} else if (BMIvalue >= 25 && BMIvalue <= 29.9) {
    weightconditionE1.innerText = "Over weight";
} else {
    weightconditionE1.innerText = "Obesity";
}

if (window.addBMIResult) {
    window.addBMIResult(
      parseFloat(BMIvalue.toFixed(1)),
      parseFloat(WEIGHTValue),
      parseFloat((HEIGHTValue * 100).toFixed(0))
    );
  }
}
btnE1.addEventListener("click", calculateBMI);