AOS.init({
    duration: 1000,
});

if (window.innerWidth < 768) {
    document.querySelectorAll('.col-footer').forEach(col => col.removeAttribute('data-aos'));
}

if (window.innerWidth < 992) {
    document.querySelectorAll('.col-footer').forEach(col => col.removeAttribute('data-aos-delay'));
}