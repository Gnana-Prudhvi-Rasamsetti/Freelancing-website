document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".talk-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const name = form.querySelector("input[placeholder='Enter your name']");
        const email = form.querySelector("input[placeholder='Enter your email']");
        const subject = form.querySelector("input[placeholder='Enter subject']");
        const message = form.querySelector("textarea");

        const nameRegex = /^[A-Za-z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name.value.trim() || !nameRegex.test(name.value)) {
            alert("Enter a valid name (only alphabets).");
            return;
        }

        if (!email.value.trim() || !emailRegex.test(email.value)) {
            alert("Enter a valid email.");
            return;
        }

        if (!subject.value.trim() || !message.value.trim()) {
            alert("All fields must be filled.");
            return;
        }

        alert("Form submitted successfully!");
        form.submit();
    });
});
