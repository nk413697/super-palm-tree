const scriptURL =
"https://script.google.com/macros/s/AKfycbzrVaqJF0tOmx3Z3B5Nd1f52-g6h1OinEhM2joHdKYhTN4NxHp9t8ptdHqFGxNh3yf8_g/exec";

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
.then(r => r.text())
.then(res => {
  console.log("Response:", res);
  alert("Registration Successful\n\nReg No: " + regno);
})
.catch(err => {
  console.error("Error:", err);
  alert("Error: " + err);
});

}