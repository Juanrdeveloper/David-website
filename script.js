const header = document.querySelector("header")

window.addEventListener("scroll", ()=>{
    header.classList.toggle("sticky", window.scrollY > 120)
})

let menu =  document.querySelector('#menu-icon');
let navlist = document.querySelector(".navlist");

menu.onclick = ()=>{
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("active")
}

window.onscroll = ()=>{
    menu.classList.remove("bx-x");
    navlist.classList.remove("active")
}

// Ventana modal
var modal = document.getElementById("ventanaModal");

var boton = document.getElementById("abrirModal");


// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


// Modern Modal

var btnModern = document.querySelector(".btn_modern")
var cerrarModern = document.querySelector(".btn_cerrar_modern")

var modernModal = document.querySelector(".modern_modal")


btnModern.addEventListener("click",()=>{
  modernModal.style.display = "flex"
})

cerrarModern.addEventListener("click",()=>{
  modernModal.style.display = "none"
})

window.addEventListener("click",function(event) {
  if (event.target == modernModal) {
    modernModal.style.display = "none";
  }
});

// Acordeon
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


// Services

btn_service_1 = document.querySelector(".btn_service_1")
btn_service_2 = document.querySelector(".btn_service_2")
btn_service_3 = document.querySelector(".btn_service_3")

input_subject = document.querySelector(".input_subject")

btn_service_1.addEventListener("click",(e)=>{
      let service = e.target.parentNode.parentNode.querySelector(".title_service_1");
        input_subject.value = "I am interested in the service: " + service.textContent

})
btn_service_2.addEventListener("click",(e)=>{
  console.log(e.target.parentNode.parentNode)
      let service = e.target.parentNode.parentNode.querySelector(".title_service_2");
        input_subject.value = "I am interested in the service: " + service.textContent

})

btn_service_3.addEventListener("click",(e)=>{
  console.log(e.target.parentNode.parentNode)
      let service = e.target.parentNode.parentNode.querySelector(".title_service_3");
        input_subject.value = "I am interested in the service: " + service.textContent

})





