document.addEventListener("DOMContentLoaded", () => {
    // Elementos do Banner
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    
    // Elementos do Modal
    const privacyModal = document.getElementById("privacy-modal");
    const openPrivacy = document.getElementById("open-privacy");
    const closePrivacy = document.getElementById("close-privacy");

    // Lógica do Banner
    if (localStorage.getItem("cookiesAccepted") === "true") {
        cookieBanner.classList.add("hidden");
    }

    acceptBtn.addEventListener("click", () => {
        cookieBanner.classList.add("hidden");
        localStorage.setItem("cookiesAccepted", "true");
    });

    // Lógica do Modal
    openPrivacy.addEventListener("click", () => {
        privacyModal.classList.add("show");
    });

    closePrivacy.addEventListener("click", () => {
        privacyModal.classList.remove("show");
    });

    // Fechar modal ao clicar fora dele (no overlay)
    privacyModal.addEventListener("click", (e) => {
        if (e.target === privacyModal) {
            privacyModal.classList.remove("show");
        }
    });

    // Fechar modal ao pressionar a tecla Esc
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && privacyModal.classList.contains("show")) {
            privacyModal.classList.remove("show");
        }
    });
});