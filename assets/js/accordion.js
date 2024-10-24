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
                toggleAccordion(targetAccordion); // Expand the accordion
                targetAccordion.scrollIntoView(); // Scroll to the section
            }
        }
    }

    // Run the function when the page loads to check for URL hash
    window.addEventListener('DOMContentLoaded', openAccordionFromHash);

    // Run the function again when the hash changes (e.g., when navigating to a new link)
    window.addEventListener('hashchange', openAccordionFromHash);