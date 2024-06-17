    document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.getElementById('dark-mode-toggle');
        const body = document.body;

        // Verificar si ya hay una preferencia guardada en el localStorage
        if (localStorage.getItem('dark-mode') === 'enabled') {
            body.classList.add('dark-mode');
        }

        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            // Guardar la preferencia en el localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('dark-mode', 'enabled');
            } else {
                localStorage.removeItem('dark-mode');
            }
        });
    });
