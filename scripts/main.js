console.log("Hello Traveler. It's dangerous to go alone! Take this. 🗡️")

let printButton = document.querySelector("button");

function printPage() { window.print(); }

printButton.addEventListener("click", printPage);
// For IE < 9
//printButton.onclick = printPage;

