let i = prompt(
  "Which operation do you want to do? Type one of these: +, -, *, / or type exit to leave. You can also leave by cancelling the prompt"
);
if (i !== "exit") {
  if (i === "+") {
    let operandi1 = Number(prompt("Name a number"));
    let operandi2 = Number(prompt("Name a number"));
    let sum = operandi1 + operandi2;
    alert(sum);
  }

  if (i === "-") {
    let operandi1 = Number(prompt("Name a number"));
    let operandi2 = Number(prompt("Name a number"));
    let sum = operandi1 - operandi2;
    alert(sum);
  }

  if (i === "*") {
    let operandi1 = Number(prompt("Name a number"));
    let operandi2 = Number(prompt("Name a number"));
    let sum = operandi1 * operandi2;
    alert(sum);
  }

  if (i === "/") {
    let operandi1 = Number(prompt("Name a number"));
    let operandi2 = Number(prompt("Name a number"));
    let sum = operandi1 / operandi2;
    alert(sum);
  }

  if (i !== "exit") {
    let operandi1 = Number(prompt("Name a number"));
    let operandi2 = Number(prompt("Name a number"));
    let sum = operandi1 + operandi2;
    alert(sum);
  }
}
