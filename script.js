const navbar = document.querySelector('.navbar')

document.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled')
    }
})

function bgchanger() {
    const mapouter = document.querySelector('.mapouter')

    if (
        mapouter.style.display === 'none' || mapouter.style.display === '') {
        mapouter.style.display = 'block'
    }

    else {
        mapouter.style.display = 'none'
    }

}

function pre (e){
    e.preventDefault
}