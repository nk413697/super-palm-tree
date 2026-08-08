

const scriptURL =
"[https://script.google.com/macros/s/AKfycbzrVaqJF0tOmx3Z3B5Nd1f52-g6h1OinEhM2joHdKYhTN4NxHp9t8ptdHqFGxNh3yf8\_g/exec](https://script.google.com/macros/s/AKfycbzrVaqJF0tOmx3Z3B5Nd1f52-g6h1OinEhM2joHdKYhTN4NxHp9t8ptdHqFGxNh3yf8_g/exec)";

const form = document.getElementById("memberForm");

form.addEventListener("submit", function (e) {

```
e.preventDefault();

const data = {
    regno: "KPVP-2026-" + Math.floor(1000 + Math.random() * 9000),
    name: document.getElementById("name").value,
    father: document.getElementById("father").value,
    village: document.getElementById("village").value,
    gotra: document.getElementById("gotra").value,
    mobile: document.getElementById("mobile").value,
    email: document.getElementById("email").value,
    profession: document.getElementById("profession").value
};

console.log(data);

fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data)
})
.then(response => response.text())
.then(result => {
    console.log(result);
    alert("Registration Successful");
})
.catch(error => {
    console.error(error);
    alert("Error: " + error);
});
```

});


