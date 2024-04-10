function smoothScrollTo(elementId) {
    const targetElement = document.getElementById(elementId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
}