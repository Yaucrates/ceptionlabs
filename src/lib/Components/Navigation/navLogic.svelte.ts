let expandedNav = $state(false);

export const navToggle = () => {
    expandedNav = !expandedNav;

    if (expandedNav) {
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Disable scrolling
        document.body.style.overflow = 'hidden';
    } else {
        // Enable scrolling
        document.body.style.overflow = 'auto';
    }
};

export const getNavState = () => {
    return expandedNav;
}