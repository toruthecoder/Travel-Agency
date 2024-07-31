// Variables 

let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

// side menu

toggle.addEventListener("click", function () {
    if (toggle.firstElementChild.classList.contains('fa-bars')) 
    {        
        toggle.firstElementChild.classList.replace('fa-bars' ,'fa-xmark');
    }
    else{
        toggle.firstElementChild.classList.replace('fa-xmark' ,'fa-bars');
    }
    menu.classList.toggle('show_menu');
});

