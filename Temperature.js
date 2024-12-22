function convertTemp() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const inputUnit = document.getElementById("inputUnit").value;
    
    if (isNaN(inputTemp)) {
        alert("Please enter a valid temperature.");
        return;
    }

    let celsius, fahrenheit, kelvin;

    // Convert input temperature to other units
    switch (inputUnit) {
        case "celsius":
            celsius = inputTemp;
            fahrenheit = (inputTemp * 9/5) + 32;
            kelvin = inputTemp + 273.15;
            break;
        case "fahrenheit":
            celsius = (inputTemp - 32) * 5/9;
            fahrenheit = inputTemp;
            kelvin = celsius + 273.15;
            break;
    }

    // Display results
    document.getElementById("celsiusResult").textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById("fahrenheitResult").textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
}