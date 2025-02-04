
let root = document.querySelector(':root')

// LABORATORIO 6
function toggleMenu() {
    let button = document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close');

    let menu = document.getElementsByClassName('js-menu');
    menu[0].classList.toggle("active");
}

function fixPhotoOnScroll() {
    let photo = document.getElementById("photo-profile");
    this.scrollY > 50 ? photo.style.marginTop = 0 : photo.style.marginTop = '-7rem';
}

window.addEventListener("scroll", fixPhotoOnScroll, false);

function showImage(imgElement) {
    // Crear el modal
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    // Crear la imagen ampliada
    const enlargedImg = document.createElement('img');
    enlargedImg.src = imgElement.src;
    enlargedImg.style.maxWidth = '90%';
    enlargedImg.style.maxHeight = '90%';
    enlargedImg.style.border = '5px solid white';
    enlargedImg.style.borderRadius = '10px';

    // Crear el botón de cierre (X)
    const closeButton = document.createElement('div');
    closeButton.classList.add('gg-close'); // Icono de CSS.gg
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.color = 'white';
    closeButton.style.fontSize = '24px';

    // Evitar que el modal se cierre al hacer clic en el botón de cierre
    closeButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el clic se propague al modal
        document.body.removeChild(modal); // Cierra el modal
    });

    // Agregar la imagen y el botón de cierre al modal
    modal.appendChild(enlargedImg);
    modal.appendChild(closeButton);

    // Cerrar el modal al hacer clic fuera de la imagen
    modal.onclick = function () {
        document.body.removeChild(modal);
    };

    // Agregar el modal al cuerpo del documento
    document.body.appendChild(modal);
}

function cerrarModal() {
    var modal = document.getElementById('preview');
    modal.classList.remove('showModal')
}

