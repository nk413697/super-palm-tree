const scriptURL =
"https://script.google.com/macros/s/AKfycbx9bd_RMC9nFnqhvkbIO_ybYrvOxlNfzu39ilPM-QU18JSBa2m93c8wX4jFSgVtxxsYgA/exec";

document
.getElementById("memberForm")
.addEventListener("submit", submitForm);

function submitForm(e){

e.preventDefault();

const regno =
"KPVP-2026-" +
Math.floor(1000 + Math.random()*9000);

const data = {

regno: regno,

name: document.getElementById("name").value,

father: document.getElementById("father").value,

village: document.getElementById("village").value,

gotra: document.getElementById("gotra").value,

mobile: document.getElementById("mobile").value,

email: document.getElementById("email").value,

profession: document.getElementById("profession").value

};

fetch(scriptURL,{

method:"POST",

body: JSON.stringify(data)

})

.then(r => r.json())

.then(res => {

alert(
"Registration Successful\n\nReg No : " +
regno
);

document
.getElementById("memberForm")
.reset();

})

.catch(err => {
console.error(err);
alert("Error: " + err);
});

}