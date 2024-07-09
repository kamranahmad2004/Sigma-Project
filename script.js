const faq = document.querySelectorAll(".wrappers");
faq.forEach((wrappers) => {
    wrappers.addEventListener("click", () => {
        wrappers.classList.toggle("active");
    })
})