const myImage = document.querySelector("img")
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/file1.png") {
        myImage.setAttribute("src", "images/file2.png");
    } else {
        myImage.setAttribute("src", "images/file1.png");
    }
};

let buttonA = document.querySelector("#button_A");
let headingA = document.querySelector("#heading_A");

function setUserName() {
    const myName = prompt("Please enter your name: ");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        headingA.textContent = 'Chrome is cool, ' + myName;
    }
}

// Logic code
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    headingA.textContent = "Chrome is cool, " + storedName;
}

buttonA.onclick = () => {
    setUserName();
    const storedName = localStorage.getItem("name")
    alert("Welcome, " + storedName)
}

const textBox = document.querySelector('#textbox');
const output = document.querySelector('#output');

textBox.addEventListener("keydown", (event) => {
    output.textContent = `You pressed "${event.key}".`;
  });