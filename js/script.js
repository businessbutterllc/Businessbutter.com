/*--------------------------------------------------
  Utility Functions
--------------------------------------------------*/
function showAlert(message, type = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${type}`;
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);
    setTimeout(() => alertDiv.remove(), 3000);
}

/*--------------------------------------------------
  Navbar Toggle for Mobile
--------------------------------------------------*/
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

/*--------------------------------------------------
  Smooth Scrolling
--------------------------------------------------*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

/*--------------------------------------------------
  Contact Form Validation & Mock Submit
--------------------------------------------------*/
const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(form);
        const errors = [];

        // Simple validation
        for (const [name, value] of formData.entries()) {
            if (!value.trim()) errors.push(`${name} is required`);
        }

        if (errors.length) {
            showAlert(errors.join('. '), 'error');
            return;
        }

        // Simulate successful submission
        console.log('Form Data:', Object.fromEntries(formData.entries()));
        form.reset();
        showAlert('Your message has been sent! We’ll get back to you shortly.');
    });
}
