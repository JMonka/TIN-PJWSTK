function submitForm(event){
    event.preventDefault();

    let number = document.getElementById("number").value;
    let name = document.getElementById("name").value;

    let requiredMessage = "To pole nie może być puste";
    let nanMessage = "To nie jest liczba";
    let emptyMessage = "";

    if (!number) {
        document.getElementById("numberError").innerText = requiredMessage;
    } else if (isNaN(number)) {
        document.getElementById("numberError").innerText = nanMessage;
    } else {
        document.getElementById("numberError").innerText = emptyMessage;
    }

    if (!name) {
        document.getElementById("nameError").innerText = requiredMessage;
    } else {
        document.getElementById("nameError").innerText = emptyMessage;
    }
}