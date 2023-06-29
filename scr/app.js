const humbergerButton = document.getElementById('humberger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

humbergerButton.addEventListener('click', toggleButton)


