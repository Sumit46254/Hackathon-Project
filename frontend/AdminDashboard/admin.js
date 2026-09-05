
const navButtons = document.querySelectorAll(".nav-btn");

const sections = document.querySelectorAll(".page-section");

const pageTitle = document.getElementById("pageTitle");

const sectionTitles = {

    dashboard: "Dashboard",

    employees: "Manage Employees",

    attendance: "Attendance",

    salary: "Salary Management",

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

        if (sectionId) {

            showSection(sectionId);

        }

    });

});


const searchInput =
    document.getElementById("searchEmployee");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchValue =
            this.value.toLowerCase();

        const rows =
            document.querySelectorAll(
                "#employeeTableBody tr"
            );


        rows.forEach(row => {

            const rowText =
                row.textContent.toLowerCase();

            if (rowText.includes(searchValue)) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    });

}


const addEmployeeBtn =
    document.getElementById("addEmployeeBtn");

if (addEmployeeBtn) {

    addEmployeeBtn.addEventListener(
        "click",
        function () {

            const name =
                prompt("Enter employee name:");

            if (!name) return;


            const phone =
                prompt("Enter phone number:");

            if (!phone) return;


            const department =
                prompt("Enter department:");

            if (!department) return;


            const wage =
                prompt("Enter daily wage:");

            if (!wage) return;


            alert(
                "Employee information received.\n\n" +
                "Later we will save this data into MongoDB."
            );

        }
    );

}

const deleteButtons =
    document.querySelectorAll(".delete-btn");

deleteButtons.forEach(button => {

    button.addEventListener("click", function () {

        const confirmed =
            confirm(
                "Are you sure you want to delete this employee?"
            );


        if (confirmed) {

            const row =
                this.closest("tr");

            row.remove();

            alert("Employee deleted.");

        }

    });

});

const editButtons =
    document.querySelectorAll(".edit-btn");

editButtons.forEach(button => {

    button.addEventListener("click", function () {

        const row =
            this.closest("tr");

        const name =
            row.children[1].textContent;

        const newName =
            prompt(
                "Enter new employee name:",
                name
            );


        if (newName && newName.trim() !== "") {

            row.children[1].textContent =
                newName.trim();

        }

    });

});

const approveButtons =
    document.querySelectorAll(".approve-btn");

approveButtons.forEach(button => {

    button.addEventListener("click", function () {

        const row =
            this.closest("tr");

        const status =
            row.querySelector(".status");

        status.textContent = "Approved";

        status.className =
            "status active";

        this.remove();

        const rejectButton =
            row.querySelector(".reject-btn");

        if (rejectButton) {

            rejectButton.remove();

        }

    });

});

const rejectButtons =
    document.querySelectorAll(".reject-btn");

rejectButtons.forEach(button => {

    button.addEventListener("click", function () {

        const row =
            this.closest("tr");

        const status =
            row.querySelector(".status");

        status.textContent = "Rejected";

        status.className =
            "status inactive";

        this.remove();

        const approveButton =
            row.querySelector(".approve-btn");

        if (approveButton) {

            approveButton.remove();

        }

    });

});

const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        const confirmLogout =
            confirm("Are you sure you want to logout?");


        if (confirmLogout) {

            window.location.href =
                "../login.html";

        }

    });

}

showSection("dashboard");