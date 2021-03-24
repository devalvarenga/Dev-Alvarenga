const menuItens = document.querySelectorAll('.menu-js a[href^="#"]');

menuItens.forEach(item => {
    item.addEventListener('click', scrollTo); 
})

function scrollTo(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to,
        behavior: "smooth",  
    });   
}   