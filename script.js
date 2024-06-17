document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('.nav-menu ul');
    const body = document.body;
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

    // Verificar si ya hay una preferencia guardada en el localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline';
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Guardar la preferencia en el localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline';
        } else {
            localStorage.removeItem('dark-mode');
            moonIcon.style.display = 'inline';
            sunIcon.style.display = 'none';
        }
    });

    // Manejo del menú hamburguesa
    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // Cerrar el menú cuando se hace clic fuera de él
    document.addEventListener('click', (e) => {
        if (!hamburgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('open');
        }
    });
});
