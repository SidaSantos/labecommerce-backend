function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numero1 = Number(process.argv[3]);
const numero2 = getRndInteger(1, 2);

if (process.argv[2] === "par") {
  numero1 % numero2 === 0
    ? console.log(
        `Você escolheu par e o computador escolheu impar. O resultado foi ${
          numero1 + numero2
        }. Você ganhou!`
      )
    : console.log(
        `Você escolheu par e o computador escolheu impar. O resultado foi ${
          numero1 + numero2
        }. Você perdeu!`
      );
} else {
  numero1 % numero2 === 1
    ? console.log(
        `Você escolheu impar e o computador escolheu par. O resultado foi ${
          numero1 + numero2
        }. Você ganhou!`
      )
    : console.log(
        `Você escolheu impar e o computador escolheu par. O resultado foi ${
          numero1 + numero2
        }. Você perdeu!`
      );
}
