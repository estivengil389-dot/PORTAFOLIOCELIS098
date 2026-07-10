const links = document.querySelectorAll('#nav a');
const botonmenu = document.getElementById('botonmenu');
links.forEach(link =>{
    link.addEventListener('click', () =>{
        botonmenu.checked = false;
    });
});