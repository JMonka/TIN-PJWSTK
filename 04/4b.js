function addP() {
    let content = document.getElementById("content").value;
    let p = document.createElement("p");
    let text = document.createTextNode(content);
    p.appendChild(text);
    let element = document.getElementById("paragraphs");
    element.appendChild(p);
}