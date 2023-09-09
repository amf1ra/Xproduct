(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active');


                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }

        });
    }


    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));



})();


const botonDesplegar = document.getElementById('botonDesplegar');
const contenido = document.getElementById('contenido');

botonDesplegar.addEventListener('click', () => {
    if (contenido.style.display === 'none' || contenido.style.display === '') {
        contenido.style.display = 'block';
        botonDesplegar.textContent = 'Show less';
    } else {
        contenido.style.display = 'none';
        botonDesplegar.textContent = 'Show more';
    }
});




document.getElementById("btn_cont").addEventListener("click", function() {
    var cont_contact = document.getElementById("cont_contact");
    cont_contact.classList.toggle("hide");
});

document.getElementById("mostrarContenido").addEventListener("click", function(e) {
    e.preventDefault(); // Evita que el enlace se comporte como un enlace normal
    var contenido = document.getElementById("contenido");
    contenido.classList.toggle("oculto");
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function () {
                alert('¡El mensaje ha sido enviado con éxito!');
                form.reset();
            }, function (error) {
                console.log('Error al enviar el mensaje:', error);
            });
    });
});