function calculate() {
  const principal = document.getElementById("principal").value;
  const interestRate = document.getElementById("interest_rate").value;
  const time = document.getElementById("time").value;

  const simpleInterest = principal * interestRate * time / 100;

  document.getElementById("result").innerHTML = simpleInterest;
}

document.getElementById("calculate").addEventListener("click", calculate);
