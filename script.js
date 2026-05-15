function alertMe(event) {
    event.preventDefault();
    const name = document.getElementById("nameInput").value;
    alert("Hi " + name + "!");
}

document.addEventListener("DOMContentLoaded", () => {
    const savedColor = localStorage.getItem("bgColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    } else {
        document.body.style.backgroundColor = "lightblue";
    }
});

function changeColor() {
    const body = document.body;
    let currentColor = body.style.backgroundColor || "lightblue";
    let newColor = currentColor === "lightgreen" ? "lightblue" : "lightgreen";
    body.style.backgroundColor = newColor;
    localStorage.setItem("bgColor", newColor);
}

function validateText(event) {
    event.preventDefault();
    const text = document.getElementById("textTesterInput").value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) {
        alert("Special character detected!");
    } else {
        alert("Valid text!");
    }
}

function addText() {
    const heading = document.getElementById("main-heading");
    heading.textContent += " Add Text";
}