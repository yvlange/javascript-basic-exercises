let i = prompt("Pick celsius or fahrenheit");

while (i !== "celsius" && i !== "fahrenheit") {
  i = prompt("Pick celsius or fahrenheit");
}

let temperature = Number(
  prompt(
    "Please give a temperature value. Please use (.) when entering a decimal separator."
  )
);

if (Number.isNaN(temperature)) {
  alert(
    "This is not a valid number. Remember to use a period for decimal numbers."
  );
} else {
  if (i === "celsius") {
    let tempCelsius = (temperature * 9) / 5 + 32;
    alert(tempCelsius + "°F");
  }

  if (i === "fahrenheit") {
    let tempFahrenheit = ((temperature - 32) * 5) / 9;
    alert(tempFahrenheit + "°C");
  }
}
