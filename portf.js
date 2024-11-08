let menu = document.querySelector('.navbar ul');
let menuIcon = document.querySelector('#menu-icon');

// Toggle menu visibility on icon click
menuIcon.onclick = () => {
menu.classList.toggle('active');
};

// Hide menu on scroll
window.onscroll = () => {
menu.classList.remove('active');
};