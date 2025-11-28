// Función para scroll suave al top
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('scroll-up-btn').addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('scroll-up-btn');
    btn.addEventListener('click', e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
    window.addEventListener('scroll', () => { btn.style.display = window.scrollY > 50 ? 'block' : 'none'; });
});

// Menú hamburguesa
// acceder al boton hamburguesa desde javascript
var menuToggle = document.querySelector(".menu-toggle");

// acceder al menú (nav-menú) desde javascript
var navMenu = document.querySelector(".navbar");

// captura el evento click del botón hamburguesa para alternar la visutalización del nemú
menuToggle.onclick = () =>{
    navMenu.classList.toggle("show")
}