
document.querySelector('.scroll-button a').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#projects-section').scrollIntoView({ behavior: 'smooth' });
});