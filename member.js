const scriptURL =
"https://script.google.com/macros/s/AKfycbzrVaqJF0tOmx3Z3B5Nd1f52-g6h1OinEhM2joHdKYhTN4NxHp9t8ptdHqFGxNh3yf8_g/exec";

document
    .getElementById("memberForm")
    .addEventListener("submit", submitForm);


function submitForm(e) {

    e.preventDefault();

    const submitBtn =
        document.getElementById("submitBtn");

    submitBtn.disabled = true;
    submitBtn.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> पंजीकरण हो रहा है...';


    const regno =
        "KPVP-2026-" +
        Math.floor(1000 + Math.random() * 9000);


    const data = {

        regno: regno,

        name:
            document.getElementById("name").value.trim(),

        father:
            document.getElementById("father").value.trim(),

        village:
            document.getElementById("village").value.trim(),

        gotra:
            document.getElementById("gotra").value.trim(),

        mobile:
            document.getElementById("mobile").value.trim(),

        email:
            document.getElementById("email").value.trim(),

        profession:
            document.getElementById("profession").value.trim()

    };


    /* MOBILE VALIDATION */

    if (!/^[6-9]\d{9}$/.test(data.mobile)) {

        document.getElementById("mobileError").innerText =
            "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।";

        submitBtn.disabled = false;

        submitBtn.innerHTML =
            '<i class="fa-solid fa-paper-plane"></i> पंजीकरण करें';

        return;
    }


    document.getElementById("mobileError").innerText = "";


    /* SEND TO GOOGLE APPS SCRIPT */

    fetch(scriptURL, {

        method: "POST",

        body: JSON.stringify(data)

    })


    .then(response => response.text())


    .then(result => {

        console.log("Google Response:", result);


        /* HIDE FORM */

        document.getElementById("memberForm").style.display =
            "none";


        /* SHOW SUCCESS */

        const success =
            document.getElementById("successMessage");

        success.style.display = "block";


        success.innerHTML = `

            <i class="fa-solid fa-circle-check"></i>

            <h3>
                पंजीकरण सफल!
            </h3>

            <p>
                आपका सदस्य पंजीकरण सफलतापूर्वक दर्ज हो गया है।
            </p>

            <div class="registration-number">

                आपका पंजीकरण नंबर

                <strong>
                    ${regno}
                </strong>

            </div>

            <a href="index.html"
               class="home-btn">

                <i class="fa-solid fa-house"></i>

                Home पर जाएं

            </a>

        `;

    })


    .catch(error => {

        console.error(
            "Registration Error:",
            error
        );


        alert(
            "पंजीकरण नहीं हो पाया। कृपया दोबारा प्रयास करें।"
        );


        submitBtn.disabled = false;

        submitBtn.innerHTML =
            '<i class="fa-solid fa-paper-plane"></i> पंजीकरण करें';

    });

}
