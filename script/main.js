var menu = document.getElementById('menu-burger');
var nav = document.getElementById('menu-nav');

menu.addEventListener("click", () =>{
    if(nav.style.display == "none"){
        nav.style.display = "inline-block";

    }else{
        nav.style.display = "none";

    }
})