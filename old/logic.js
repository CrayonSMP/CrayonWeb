// Wrap all JS in DOMContentLoaded to ensure elements exist
document.addEventListener('DOMContentLoaded', () => {

    // Initialize AOS (Animate on Scroll)
    try {
        AOS.init({
            duration: 800,
            once: true, // Animate only once
            offset: 50,   // Trigger slightly earlier
            disable: 'mobile' // Optional: disable on mobile for performance
        });
    } catch (e) {
        console.error("AOS initialization failed:", e);
    }

    // Initialize Lucide Icons
    try {
        lucide.createIcons();
    } catch (e) {
        console.error("Lucide icons initialization failed:", e);
    }

    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // --- Countdown Timer Logic ---
    const countdownElement = document.getElementById('countdown');
    const countdownErrorElement = document.getElementById('countdown-error');
    const countdownLaunchedElement = document.getElementById('countdown-launched');
    let interval; // Declare interval variable outside

    if (countdownElement && countdownErrorElement && countdownLaunchedElement) {
        const countdownBlocks = countdownElement.querySelectorAll('.countdown-block');

        if (countdownBlocks.length === 4) {
            const currentYear = new Date().getFullYear();

            // The original date was in June, 2025. This now needs to be adjusted.
            // Based on the new HTML, the launch is in December 2025.
            const countDownDate = Date.UTC(2025, 11, 1, 0, 0, 0); // December is month 11 (0-indexed)

            const updateCountdown = () => {
                const now = new Date().getTime(); // Current local time
                const distance = countDownDate - now;

                // Select spans within the current scope
                const daysSpan = countdownBlocks[0]?.querySelector('span');
                const hoursSpan = countdownBlocks[1]?.querySelector('span');
                const minutesSpan = countdownBlocks[2]?.querySelector('span');
                const secondsSpan = countdownBlocks[3]?.querySelector('span');

                // Ensure all spans are found
                if (!daysSpan || !hoursSpan || !minutesSpan || !secondsSpan) {
                    console.error("Could not find all countdown span elements.");
                    countdownElement.classList.add('hidden'); // Hide broken countdown
                    countdownErrorElement.classList.remove('hidden'); // Show error
                    if (interval) clearInterval(interval); // Clear interval if exists
                    return;
                }

                if (distance < 0) {
                    if (interval) clearInterval(interval);
                    countdownElement.classList.add('hidden'); // Hide countdown blocks
                    countdownLaunchedElement.classList.remove('hidden'); // Show launched message
                    return; // Stop further updates
                }

                // Time calculations
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Formatting function
                const format = (num) => String(num).padStart(2, '0');

                // Update DOM elements
                daysSpan.textContent = format(days);
                hoursSpan.textContent = format(hours);
                minutesSpan.textContent = format(minutes);
                secondsSpan.textContent = format(seconds);
            };

            // Run once immediately
            updateCountdown();

            // Update every second
            interval = setInterval(updateCountdown, 1000);

        } else {
            console.error("Countdown DOM structure is not as expected (needs 4 .countdown-block elements).");
            countdownElement.classList.add('hidden');
            countdownErrorElement.classList.remove('hidden');
        }
    } else {
        // Log which element is missing
        if (!countdownElement) console.error("Countdown element with ID 'countdown' not found.");
        if (!countdownErrorElement) console.error("Countdown element with ID 'countdown-error' not found.");
        if (!countdownLaunchedElement) console.error("Countdown element with ID 'countdown-launched' not found.");
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Optional: Change icon on toggle
            const icon = mobileMenuButton.querySelector('i');
            if (icon) {
                icon.setAttribute('data-lucide', mobileMenu.classList.contains('hidden') ? 'menu' : 'x');
                lucide.createIcons(); // Re-render icons
            }
        });
        // Close menu when a link is clicked (optional)
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuButton.querySelector('i');
                if (icon) {
                    icon.setAttribute('data-lucide', 'menu');
                    lucide.createIcons();
                }
            });
        });
    } else {
        if (!mobileMenuButton) console.error("Mobile menu button not found.");
        if (!mobileMenu) console.error("Mobile menu element not found.");
    }

    // --- FAQ Accordion Logic ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.closest('.faq-item');
            const answer = question.nextElementSibling;
            const isExpanded = question.getAttribute('aria-expanded') === 'true';

            // Close any other open answers
            document.querySelectorAll('.faq-item.open').forEach(openItem => {
                if (openItem !== faqItem) {
                    openItem.classList.remove('open');
                    openItem.querySelector('.faq-question').classList.remove('open');
                    openItem.querySelector('.faq-answer').classList.remove('open');
                    openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    openItem.querySelector('.faq-answer').setAttribute('aria-hidden', 'true');
                }
            });

            // Toggle the clicked answer and the parent item's open state
            faqItem.classList.toggle('open');
            question.classList.toggle('open');
            answer.classList.toggle('open');
            question.setAttribute('aria-expanded', !isExpanded);
            answer.setAttribute('aria-hidden', isExpanded);
        });
    });

    lucide.createIcons();

}); // End of DOMContentLoaded