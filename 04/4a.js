function cToF(celsius) {
    const cTemp = celsius;
    const cToFahr = cTemp * 9 / 5 + 32;
    const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
    console.log(message);

    return cToFahr;
}

function fToC(fahrenheit) {
    const fTemp = fahrenheit;
    const fToCel = (fTemp - 32) * 5 / 9;
    const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
    console.log(message);

    return fToCel;
}

function convert() {
    let type = document.getElementById("type").value;
    let temperature = parseInt(document.getElementById("temperature").value);
    let result = 0;
    
    if (type === 'ctof') {
        result = cToF(temperature);
    } else {
        result = fToC(temperature);
    }

    document.getElementById("result").value = result;
}

//cToF(60);
//fToC(45);