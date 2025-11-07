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
    window.addEventListener('scroll', () => { btn.style.display = window.scrollY > 1500 ? 'block' : 'none'; });
});