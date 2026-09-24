/* Mobile navigation.
 * The hamburger button toggles the collapsed menu panel; the stylesheet only
 * collapses the menu below 767px, so above that breakpoint these handlers just
 * keep `aria-expanded` and `.is-open` in sync with no visual effect. */
const navigationToggle = document.querySelector(".site-nav-toggle");
const siteNavigation = document.querySelector(".site-nav");

function setNavigationOpen(isOpen) {
    navigationToggle.setAttribute("aria-expanded", String(isOpen));
    navigationToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu navigasi" : "Buka menu navigasi",
    );
    siteNavigation.classList.toggle("is-open", isOpen);
}

/* One delegated handler covers the three cases: the button itself, a click on a
 * menu link (close so the target section is visible), and a click anywhere else. */
document.addEventListener("click", (event) => {
    if (navigationToggle.contains(event.target)) {
        setNavigationOpen(
            navigationToggle.getAttribute("aria-expanded") !== "true",
        );
        return;
    }
    if (siteNavigation.contains(event.target) && !event.target.closest("a")) {
        return;
    }
    setNavigationOpen(false);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setNavigationOpen(false);
});
