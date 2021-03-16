let a = Number(prompt("Can I have your number please?"));
let sum = 0;
for (let i = 0; i <= a; i++) {
  sum += i;
}

if (a < 0) {
  alert("Please enter a positive number");
} else alert(sum);
