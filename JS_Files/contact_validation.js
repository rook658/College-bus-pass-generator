document.addEventListener("DOMContentLoaded", () => {

    const fields = {
        name: {
            input: document.getElementById("name"),
            error: document.getElementById("nameError"),
            validate: (v) => /^[A-Za-z ]{3,}$/.test(v.trim()),
            message: "Enter a valid name (letters only, min 3 chars)."
        },
        ID: {
            input: document.getElementById("ID"),
            error: document.getElementById("IDError"),
            validate: (v) => /^[A-Za-z0-9]{5,15}$/.test(v.trim()),
            message: "Registration ID must be 5–15 characters."
        },
        email: {
            input: document.getElementById("email"),
            error: document.getElementById("emailError"),
            validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
            message: "Enter a valid email address."
        },
        route: {
            input: document.getElementById("route"),
            error: document.getElementById("routeError"),
            validate: (v) => v !== "",
            message: "Please select a route."
        },
        text: {
            input: document.getElementById("text"),
            error: document.getElementById("textError"),
            validate: (v) => v.trim().length >= 10,
            message: "Message must be at least 10 characters."
        }
    };

    const form = document.querySelector("contactForm");

    // LIVE validation
    Object.values(fields).forEach(field => {
        field.input.addEventListener("input", () => validateField(field));
        field.input.addEventListener("change", () => validateField(field)); // for dropdown
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let allValid = true;

        Object.values(fields).forEach(field => {
            if (!validateField(field)) allValid = false;
        });

        if (allValid) {
            showToast("Form submitted successfully!");
            form.reset();
            clearBorders();
        }
    });

    function validateField(fieldObj) {
        const value = fieldObj.input.value;

        if (!fieldObj.validate(value)) {
            fieldObj.error.textContent = fieldObj.message;

            fieldObj.input.classList.remove("border-green-600");
            fieldObj.input.classList.add("border-red-500");

            return false;
        } else {
            fieldObj.error.textContent = "";

            fieldObj.input.classList.remove("border-red-500");
            fieldObj.input.classList.add("border-green-600");

            return true;
        }
    }

    function clearBorders() {
        Object.values(fields).forEach(f => {
            f.input.classList.remove("border-red-500", "border-green-600");
        });
    }

    function showToast(message) {
        const toast = document.getElementById("toast");
        toast.textContent = message;

        toast.classList.remove("opacity-0", "translate-y-5");
        toast.classList.add("opacity-100", "translate-y-0");

        setTimeout(() => {
            toast.classList.remove("opacity-100", "translate-y-0");
            toast.classList.add("opacity-0", "translate-y-5");
        }, 2500);
    }

});
