<script>
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio script loaded and DOM ready!');

    // 1. Handle form submission
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
    });

    // 2. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
</script>
