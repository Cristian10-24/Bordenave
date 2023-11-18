var swiper = new Swiper(".mySwiper-1", {
    slidesPerView:1,
    spaceBetween: 30,
    loop: true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEL: ".swiper-button-prev",
    }

});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
    }
});



let tabInputs = document.querySelectorAll(".tabInput")

tabInputs.forEach(function(input) {

input.addEventListener('change', function() {
let id = input.ariaValueMax;
let thisSwiper = document.getElementById('swiper' + id);
thisSwiper.swiper.update();
})
});

// Datos iniciales de reseñas (puedes obtener estos datos de tu backend)
var reseñasData = [
    { nombre: 'Sergio', calificación: 5, comentario: '¡Me encantaron las hamburguesas!' },
    { nombre: 'Andreina', calificación: 4, comentario: 'Los burritos son increíbles...' }
];

// Función para agregar reseñas al contenedor
function mostrarReseñas() {
    var reseñasContainer = document.getElementById('reseñas-container');
    reseñasContainer.innerHTML = '';

    reseñasData.forEach(function (reseña) {
        var reseñaHTML = '<div class="reseña">' +
            '<div class="usuario"><p>' + reseña.nombre + '</p></div>' +
            '<div class="calificación">' + generarEstrellas(reseña.calificación) + '</div>' +
            '<p class="comentario">' + reseña.comentario + '</p>' +
            '</div>';

        reseñasContainer.innerHTML += reseñaHTML;
    });
}

// Función para generar estrellas basadas en la calificación
function generarEstrellas(calificación) {
    var estrellasHTML = '';
    for (var i = 0; i < calificación; i++) {
        estrellasHTML += '&#9733;';
    }
    return estrellasHTML;
}

// Función para agregar una nueva reseña
function agregarReseña() {
    var nombre = document.getElementById('nombre').value;
    var calificación = document.getElementById('calificación').value;
    var comentario = document.getElementById('comentario').value;

    // Validar que se proporcionen todos los campos
    if (nombre && calificación && comentario) {
        // Agregar la nueva reseña a los datos
        reseñasData.push({ nombre: nombre, calificación: parseInt(calificación), comentario: comentario });

        // Actualizar la visualización de reseñas
        mostrarReseñas();

        // Limpiar el formulario
        document.getElementById('nombre').value = '';
        document.getElementById('calificación').value = '';
        document.getElementById('comentario').value = '';
    } else {
        alert('Por favor, completa todos los campos del formulario.');
    }
}

// Mostrar las reseñas al cargar la página
window.onload = function () {
    mostrarReseñas();
};

