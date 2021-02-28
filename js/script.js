eventListeners();

var navegacion = document.getElementById('navegacion');



function eventListeners(){

    document.querySelector('.mobile-menu a img').addEventListener('click', mostrarMenu);

}


function mostrarMenu(e){
    e.preventDefault();
    if(navegacion.style.display  === 'block')
        navegacion.style.display = 'none';
    else
        navegacion.style.display = 'block';
}