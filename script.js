// references for navigation button and the menu for mobile
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
// event for the menu button
menu.addEventListener('click', () => {
    nav.classList.toggle('active');
    menu.classList.toggle('active');
});

// references for the login elements
const loginBtn = document.querySelectorAll('.loginBtn');
const loginForm = document.querySelector('.loginScreen');
// we use a forEach loop to add an event listener to each button
loginBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        loginForm.classList.toggle('active');
    });
});
//  reference for the close button
const closeBtn = document.querySelector('.closeBtn');
//  event for the close button
closeBtn.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

// get all the child elements of .nav and store them in an array
const navItems = document.querySelector('.nav').children;

// every button has a click function that sets the menu to remove active class
// with this, the menu will close when a button is clicked
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', () => {
        nav.classList.remove('active');
        menu.classList.remove('active');
    });
}