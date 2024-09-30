// Open login modal
const loginLink = document.querySelector('.fa-sign-in-alt');
const modal = document.getElementById('login-modal');

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
// Select the travel form element
const travelForm = document.querySelector('.travel-form');

// Add animation when the page is scrolled
window.addEventListener('scroll', () => {
    const formPosition = travelForm.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (formPosition < screenPosition) {
        travelForm.classList.add('animate__animated', 'animate__fadeInUp');
    }
});
