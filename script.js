let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick= ()=>{
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = ()=>{
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
}

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend developer', 'Web desinger'],
    typeSpeed: 70,
    backSpeed: 80, 
    backDelay: 1200,
    loop: true,
})
