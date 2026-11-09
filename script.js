
// ============================================
// ASADHI NANDINI - PORTFOLIO JAVASCRIPT
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    // 1. SELECT HTML ELEMENTS
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("main section");
    const footer = document.querySelector("footer");
    const hireButton = document.querySelector(".nav-button");

    // 2. UPDATE FOOTER YEAR
    if (footer) {
        const footerText = footer.querySelector("p");

        if (footerText) {
            footerText.innerHTML =
                `&copy; ${new Date().getFullYear()} Asadhi Nandini. All Rights Reserved.`;
        }
    }

    // 3. SMOOTH NAVIGATION
    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const targetSection =
                document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                history.replaceState(null, "", targetId);
            }

        });

    });

    // 4. ACTIVE NAVIGATION LINK
    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionBottom =
                sectionTop + section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {
                currentSection = section.id;
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();

    // 5. SCROLL REVEAL ANIMATION
    const animatedElements =
        document.querySelectorAll(
            ".section-title, .about-content, " +
            ".skill-card, .project-card, " +
            ".internship-card, .education-card"
        );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observerInstance) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observerInstance.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        animatedElements.forEach(function (element) {

            element.classList.add("reveal");

            observer.observe(element);

        });

    } else {

        animatedElements.forEach(function (element) {
            element.classList.add("show");
        });

    }

    // 6. HIRE ME BUTTON
    if (hireButton) {

        hireButton.addEventListener("click", function (event) {

            const contactSection =
                document.querySelector("#contact");

            if (contactSection) {

                event.preventDefault();

                contactSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }

    // 7. PROJECT CARD HOVER EFFECT
    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.classList.add("project-hover");

        });

        card.addEventListener("mouseleave", function () {

            card.classList.remove("project-hover");

        });

    });

    // 8. PROFILE IMAGE CHECK
    const profileImage =
        document.querySelector(".hero-image img");

    if (profileImage) {

        profileImage.addEventListener("error", function () {

            profileImage.style.display = "none";

        });

    }

    // 9. CURRENT YEAR
    console.log("Portfolio website loaded successfully!");

    console.log("Welcome to Asadhi Nandini's Portfolio!");

});
