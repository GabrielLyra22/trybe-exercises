const { question, questionFloat } = require('readline-sync');

const height = questionFloat("What' your height? : ");
const weight = question("What' your weight? : ");
const bmi = weight / (height ** 2);

const calculatingBmi = (bmi) => {
    if (bmi < 18.5 ) return 'Abaixo do peso';
    else if (bmi >= 18.5 && bmi <= 24.9) return 'Peso normal';
    else if (bmi >= 25 && bmi <= 29.9) return 'Sobrepeso';
    else if (bmi >= 30 && bmi <= 34.9) return 'Obesidade 1';
    else if (bmi >= 35 && bmi <= 39.9) return 'Obesidade 2';
    else return 'Obesidade 3';
};

console.log(calculatingBmi(bmi));