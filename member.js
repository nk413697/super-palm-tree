alert("member.js loaded");
const scriptURL =
"https://script.google.com/macros/s/AKfycbzrVaqJF0tOmx3Z3B5Nd1f52-g6h1OinEhM2joHdKYhTN4NxHp9t8ptdHqFGxNh3yf8_g/exec";
const form = document.getElementById("memberForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const submitBtn = document.getElementById("submitBtn");

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Saving...";

    const regno =
        "KPVP-2026-" +
        Math.floor(1000 + Math.random() * 9000);

    const data = {
        regno: regno,
        name: document.getElementById("name").value.trim(),
        father: document.getElementById("father").value.trim(),
        village: document.getElementById("village").value.trim(),
        gotra: document.getElementById("gotra").value.trim(),
        mobile: document.getElementById("mobile").value.trim(),
        email: document.getElementById("email").value.trim(),
        profession: document.getElementById("profession").value.trim(),
        photoUrl: "",
        status: "Pending"
    };

    fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(data)
    })
    .then(function () {

        alert(
            "पंजीकरण सफलतापूर्वक दर्ज हो गया है।\n\n" +
            "Registration No: " + regno
        );

        form.reset();

        submitBtn.disabled = false;
        submitBtn.innerHTML =
            '<i class="fa-solid fa-paper-plane"></i> पंजीकरण करें';

    })
    .catch(function (error) {

        console.error(error);

        alert(
            "पंजीकरण सेव नहीं हो पाया।\nकृपया दोबारा प्रयास करें।"
        );

        submitBtn.disabled = false;
        submitBtn.innerHTML =
            '<i class="fa-solid fa-paper-plane"></i> पंजीकरण करें';

    });

});
