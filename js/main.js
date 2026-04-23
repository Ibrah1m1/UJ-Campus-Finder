// UJ Campus Finder — Main JS

document.addEventListener("DOMContentLoaded", () => {

    // ---- Mobile nav toggle ----
    const toggle = document.getElementById("navToggle");
    const links  = document.getElementById("navLinks");

    if (toggle && links) {
        toggle.addEventListener("click", () => {
            const isOpen = links.classList.toggle("open");
            toggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        links.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                links.classList.remove("open");
                toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

    // TODO: load reports from GET /api/reports on reports page
    // TODO: handle report form submission to POST /api/reports
    // TODO: handle claim form submission to POST /api/claims
    // TODO: handle contact form submission to POST /api/contact
});
