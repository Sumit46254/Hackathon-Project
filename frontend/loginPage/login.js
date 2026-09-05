
const workerRole =
    document.getElementById("workerRole");

const adminRole =
    document.getElementById("adminRole");

const idLabel =
    document.getElementById("idLabel");

const userId =
    document.getElementById("userId");

const password =
    document.getElementById("password");

const loginForm =
    document.getElementById("loginForm");

const errorMessage =
    document.getElementById("errorMessage");

    
let selectedRole = "worker";

workerRole.addEventListener("click", function () {

    selectedRole = "worker";

    workerRole.classList.add("active");

    adminRole.classList.remove("active");


    idLabel.textContent = "Worker ID";

    userId.placeholder = "Enter Worker ID";

    errorMessage.textContent = "";

});

adminRole.addEventListener("click", function () {

    selectedRole = "admin";

    adminRole.classList.add("active");

    workerRole.classList.remove("active");


    idLabel.textContent = "Admin ID";

    userId.placeholder = "Enter Admin ID";

    errorMessage.textContent = "";

});

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const id =
        userId.value.trim();

    const pass =
        password.value;

    errorMessage.textContent = "";

    if (selectedRole === "worker") {

        if (
            id === "EMP001" &&
            pass === "worker123"
        ) {

            window.location.href =
                "../WorkerDashboard/employee.html";

        }

        else {

            errorMessage.textContent =
                "Invalid Worker ID or password.";

            password.value = "";

        }

    }

    else if (selectedRole === "admin") {

        if (
            id === "ADMIN001" &&
            pass === "admin123"
        ) {

            window.location.href =
                "../AdminDashboard/admin.html";

        }

        else {

            errorMessage.textContent =
                "Invalid Admin ID or password.";

            password.value = "";

        }

    }

});