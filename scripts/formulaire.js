document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const message = document.getElementById("message").ariaValueMax;
        const errorMessage = document.getElementById("errorMessage");

        if (message.length < 15) {
            errorMessage;
        }
    });
