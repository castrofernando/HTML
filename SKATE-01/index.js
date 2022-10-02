
document.addEventListener("DOMContentLoaded", function(event) { 

    const menu_button = this.querySelector('.cabecalho__menu');
    const menu = this.querySelector('.menu-lateral');

    menu_button.addEventListener("click",()=>{
        menu.classList.toggle("menu-lateral--ativo");
    })
    
});

