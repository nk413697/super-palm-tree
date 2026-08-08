document
    .getElementById("adminLoginForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        const username =
            document.getElementById("username").value;

        const password =
            document.getElementById("password").value;

        // Temporary login
        const adminUsername = "admin";
        const adminPassword = "KPVP@123";

        if (
            username === adminUsername &&
            password === adminPassword
        ) {

            sessionStorage.setItem(
                "kpvpAdmin",
                "loggedIn"
            );

            window.location.href = "admin-panel.html";

        } else {

            document.getElementById("loginMessage").innerText =
                "❌ Username या Password गलत है।";
        }

    });