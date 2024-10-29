// Function to toggle accordion based on element
function toggleAccordion(accordionHeader) {
    accordionHeader.classList.toggle('active');
    let content = accordionHeader.nextElementSibling;
    
    if (content.classList.contains('show')) {
        content.classList.remove('show');
        content.style.maxHeight = null;
    } else {
        content.classList.add('show');
        content.style.maxHeight = content.scrollHeight + "px";
    }

    // Wait for the content to open before scrolling into view
    setTimeout(() => {
        accordionHeader.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300); // Adjust this delay if needed
}

// Handle accordion click
document.querySelectorAll('.accordion').forEach(item => {
    item.addEventListener('click', function() {
        toggleAccordion(this);
    });
});

// Function to check if URL has a hash and expand the corresponding accordion
function openAccordionFromHash() {
    const hash = window.location.hash;
    if (hash) {
        const targetAccordion = document.querySelector(hash);
        if (targetAccordion && targetAccordion.classList.contains('accordion')) {
            // Expand the accordion
            toggleAccordion(targetAccordion);

            // Wait briefly for the accordion to fully open, then scroll to it
            setTimeout(() => {
                targetAccordion.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 200); // Adjust this delay as needed
        }
    }
}

// Run the function when the page loads to check for URL hash
window.addEventListener('DOMContentLoaded', openAccordionFromHash);

// Run the function again when the hash changes (e.g., when navigating to a new link)
window.addEventListener('hashchange', openAccordionFromHash);
