document.addEventListener("DOMContentLoaded", function () {
    const nextButtons = document.querySelectorAll(".next-btn");
    const prevButtons = document.querySelectorAll(".prev-btn");

    nextButtons.forEach(button => {
        button.addEventListener("click", function () {
            const currentForm = button.closest("form");
            if (validateForm(currentForm)) {
                window.location.href = button.getAttribute("data-next");
            }
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = button.getAttribute("data-prev");
        });
    });

    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll("input[required], textarea[required]");

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                isValid = false;
                input.classList.add("error");
                input.reportValidity();
            } else {
                input.classList.remove("error");
            }
        });

        return isValid;
    }

    document.querySelector("#additionalInfoForm")?.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted successfully!");
        window.location.href = "thank_you.html";
    });
});







