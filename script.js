// ======================================
// NAVBAR SCROLL EFFECT
// ======================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ======================================
// SCROLL REVEAL ANIMATION
// ======================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {
    observer.observe(section);
});


// ======================================
// PROJECT CARD ANIMATION
// ======================================

const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.2
    }
);


projectCards.forEach((card) => {
    projectObserver.observe(card);
});


// ======================================
// SKILL CARD ANIMATION
// ======================================

const skillCards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.2
    }
);


skillCards.forEach((card) => {
    skillObserver.observe(card);
});

// ======================================
// CATCH QUEST MODAL
// ======================================

const projectModal = document.getElementById("projectModal");

function openProject() {
    projectModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeProject() {
    projectModal.classList.remove("active");
    document.body.style.overflow = "";
}

projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal) {
        closeProject();
    }
});


// ======================================
// WEDDING INVITATION MODAL
// ======================================

const weddingModal = document.getElementById("weddingModal");

function openWeddingProject() {
    weddingModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeWeddingProject() {
    weddingModal.classList.remove("active");
    document.body.style.overflow = "";
}

weddingModal.addEventListener("click", (event) => {
    if (event.target === weddingModal) {
        closeWeddingProject();
    }
});


// ======================================
// CREATIVE DESIGN MODAL
// ======================================

const designModal = document.getElementById("designModal");

function openDesignProject() {
    designModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeDesignProject() {
    designModal.classList.remove("active");
    document.body.style.overflow = "";
}

designModal.addEventListener("click", (event) => {
    if (event.target === designModal) {
        closeDesignProject();
    }
});


// ======================================
// MULTIMEDIA PROJECT MODAL
// ======================================

const multimediaModal = document.getElementById("multimediaModal");

function openMultimediaProject() {
    multimediaModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMultimediaProject() {
    multimediaModal.classList.remove("active");
    document.body.style.overflow = "";
}

multimediaModal.addEventListener("click", (event) => {
    if (event.target === multimediaModal) {
        closeMultimediaProject();
    }
});