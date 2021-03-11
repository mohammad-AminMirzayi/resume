window.addEventListener('scroll', () => {
    const header = document.querySelector('#header')

    if (window.pageYOffset > 0) {

        header.classList.add('fixed-color')

    } else {
        header.classList.remove('fixed-color')
    }
})
// spinner...
const loadingGif = document.createElement('img')
loadingGif.src = 'img/spinner.gif'
document.addEventListener("DOMContentLoaded", () => {
    const loading = document.querySelector('.loading')
    container = document.querySelector('.container'),
        footer = document.querySelector('.footer')
    container.style.display = 'none'
    footer.style.display = 'none'
    loading.append(loadingGif)
    setTimeout(() => {
        loading.remove()
        container.style.display = 'block'
        footer.style.display = 'block'
    }, 3000);
})

// read more button
const arrowIcon = document.querySelector('#arrowIcon')
arrowIcon.addEventListener('click', () => {
    const hideParaghragh1 = document.querySelector('.hideAboutParaghragh1')
    const hideParaghragh2 = document.querySelector('.hideAboutParaghragh2')
    const hideParaghragh3 = document.querySelector('.hideAboutParaghragh3')
    const hideParaghragh4 = document.querySelector('.hideAboutParaghragh4')
    if (hideParaghragh1 !== 'block' && hideParaghragh2 !== 'block' && hideParaghragh3 !== 'block' && hideParaghragh4 !== 'block') {
        hideParaghragh1.style.display = 'block'
        hideParaghragh2.style.display = 'block'
        hideParaghragh3.style.display = 'block'
        hideParaghragh4.style.display = 'block'
        const aboutMe = document.querySelector('#about-me').style.height = '490px'
    } else {
        hideParaghragh1.style.display = 'none!important'
        hideParaghragh2.style.display = 'none!important'
        hideParaghragh3.style.display = 'none!important'
        hideParaghragh4.style.display = 'none!important'
    }

})

// mobile menu
// access to the li of the header

// access to the mobilemenu 
let menuBar1 = document.querySelector('.menu-bar')
let menuBar2 = document.querySelector('.menu-bar1')

// add event listener to the mobile menu 
menuBar1.addEventListener('click', () => {
    const mobile = document.querySelector('.mobile')
    if (mobile.style.display !== 'block') {
        mobile.style.display = 'block'
    } else {
        mobile.style.display = 'none'
    }

})
menuBar2.addEventListener('click', () => {
    const mobile = document.querySelector('.mobile')
    if (mobile.style.display !== 'block') {
        mobile.style.display = 'block'
    } else {
        mobile.style.display = 'none'
    }

})

// prompt to the create project

function projectFields() {
    let projectPrompt = prompt('در خواست برای ثبت پروژه +شماره تلفن ', 'مثال:سایت خبری , فروشگاهی...')

    if (projectPrompt === '') {
        alert('لطقا فرم درخواست پروژه را به درستی پرکنید')
    } else {
        alert('در خواست شما با موفقیت ثبت شد')
        setTimeout(() => {
            location.reload()
        }, 3000);
    }
}