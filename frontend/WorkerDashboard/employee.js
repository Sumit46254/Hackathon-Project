
const navButtons = document.querySelectorAll(".nav-btn");

const sections = document.querySelectorAll(".page-section");

const pageTitle = document.getElementById("pageTitle");



const sectionTitles = {
    dashboard: "Dashboard",
    profile: "My Profile",
    attendance: "Attendance",
    salary: "Salary",
    leave: "Leave Management"
};



function showSection(sectionId) {

    sections.forEach(section => {
        section.classList.remove("active-section");
    });


    const selectedSection =
        document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.add("active-section");
    }

    navButtons.forEach(button => {
        button.classList.remove("active");
    });


    navButtons.forEach(button => {

        if (button.dataset.section === sectionId) {
            button.classList.add("active");
        }

    });

    if (sectionTitles[sectionId]) {
        pageTitle.textContent =
            sectionTitles[sectionId];
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


navButtons.forEach(button => {

    button.addEventListener("click", function () {

        const sectionId =
            this.dataset.section;

        showSection(sectionId);

    });

});


const viewAllButton =
    document.querySelector(".small-btn");


if (viewAllButton) {

    viewAllButton.addEventListener("click", function () {

        showSection("attendance");

    });

}


const applyLeaveBtn =
    document.getElementById("applyLeaveBtn");


if (applyLeaveBtn) {

    applyLeaveBtn.addEventListener("click", function () {

        const reason = prompt(
            "Enter the reason for your leave:"
        );


        if (reason === null) {
            return;
        }


        if (reason.trim() === "") {

            alert("Please enter a reason.");

            return;
        }


        const days = prompt(
            "Enter number of leave days:"
        );


        if (days === null) {
            return;
        }


        const numberOfDays = Number(days);


        if (
            isNaN(numberOfDays) ||
            numberOfDays <= 0
        ) {

            alert("Please enter a valid number of days.");

            return;
        }


        alert(
            "Leave application submitted successfully!"
        );

    });

}


const logoutBtn =
    document.getElementById("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        const confirmLogout =
            confirm("Are you sure you want to logout?");


        if (confirmLogout) {

            window.location.href = "login.html";

        }

    });

}

showSection("dashboard");