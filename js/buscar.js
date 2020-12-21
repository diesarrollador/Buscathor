addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('boton');
    const buscador = document.getElementById('bus');
    const icono = document.getElementById('icono');
    const icono2 = document.getElementById('icono2');
    const button2 = document.getElementById('boton2');

    /*-----Función para abrir o cerrar el input de buscar----*/
    button.addEventListener('click', () => {
        if (buscador.classList.contains('open') && icono.classList.contains('icon-equiz')) {
            buscador.classList.remove('open')
            icono.classList.remove('icon-equiz')
            icono.classList.add('icon-buscar')
            icono2.classList.remove('icon-buscar')
            button2.classList.remove('boton')
        } else {
            buscador.classList.add('open')
            icono.classList.remove('icon-buscar')
            icono.classList.add('icon-equiz')
            icono2.classList.add('icon-buscar')
            button2.classList.add('boton')
        }
    });
    /*-----Función para cerrar el input de buscar cuando se da click fuera de él----*/
    window.addEventListener('click', function (e) {
        if (document.getElementById('bus').contains(e.target)) {
            // Click dentro de la caja
        } else {
            // Click fuera de la caja
            icono2.classList.remove('icon-buscar')
            buscador.classList.remove('open')
            button2.classList.remove('boton')
            icono.classList.remove('icon-equiz')
            icono.classList.add('icon-buscar')
        }
    });
})