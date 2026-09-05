// ============================================
// EMPLOYEE PORTAL JAVASCRIPT
// ============================================


// Get all navigation buttons
const navButtons = document.querySelectorAll(".nav-btn");

// Get all page sections
const sections = document.querySelectorAll(".page-section");

// Page title
const pageTitle = document.getElementById("pageTitle");


// ============================================
// SECTION NAMES
// ============================================

const sectionTitles = {
    dashboard: "Dashboard",
    profile: "My Profile",
    attendance: "Attendance",
    salary: "Salary",
    leave: "Leave Management"
};


// ============================================
// SHOW SECTION
// ============================================

function showSection(sectionId) {

    // Hide all sections
    sections.forEach(section => {
        section.classList.remove("active-section");
    });


    // Show selected section
    const selectedSection =
        document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.add("active-section");
    }


    // Remove active from all buttons
    navButtons.forEach(button => {
        button.classList.remove("active");
    });


    // Add active to clicked button
    navButtons.forEach(button => {

        if (button.dataset.section === sectionId) {
            button.classList.add("active");
        }

    });


    // Change page title
    if (sectionTitles[sectionId]) {
        pageTitle.textContent =
            sectionTitles[sectionId];
    }


    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================
// NAVIGATION BUTTONS
// ============================================

navButtons.forEach(button => {

    button.addEventListener("click", function () {

        const sectionId =
            this.dataset.section;

        showSection(sectionId);

    });

});


// ============================================
// VIEW ALL ATTENDANCE BUTTON
// ============================================

const viewAllButton =
    document.querySelector(".small-btn");


if (viewAllButton) {

    viewAllButton.addEventListener("click", function () {

        showSection("attendance");

    });

}


// ============================================
// APPLY LEAVE
// ============================================

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


// ============================================
// LOGOUT
// ============================================

const logoutBtn =
    document.getElementById("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        const confirmLogout =
            confirm("Are you sure you want to logout?");


        if (confirmLogout) {

            // Change this to your actual login page
            window.location.href = "login.html";

        }

    });

}


// ============================================
// INITIAL PAGE
// ============================================

// Dashboard is displayed when the page loads
showSection("dashboard");