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

// var span = document.getElementsByClassName("cerrar")[0];

// boton.addEventListener("click",function() {
//   modal.style.display = "flex";
// });

// span.addEventListener("click",function() {
//   modal.style.display = "none";
// });

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});



// The PResidential Limo

var btnLimo = document.querySelector(".btn_Limo")
var cerrarLimo = document.querySelector(".btn_cerrar_limo")

var LimoModal = document.querySelector(".limo_modal")


btnLimo.addEventListener("click",()=>{
  LimoModal.style.display = "flex"
})

cerrarLimo.addEventListener("click",()=>{
  LimoModal.style.display = "none"
})

window.addEventListener("click",function(event) {
  if (event.target == LimoModal) {
    LimoModal.style.display = "none";
  }
});



// Casa Mordan

var btnCasaMordan = document.querySelector(".btn_casamordan")
var cerrarCasaMordan = document.querySelector(".btn_cerrar_casamordan")

var CasaMordanModal = document.querySelector(".casamordan_modal")


btnCasaMordan.addEventListener("click",()=>{
  CasaMordanModal.style.display = "flex"
})

cerrarCasaMordan.addEventListener("click",()=>{
  CasaMordanModal.style.display = "none"
})

window.addEventListener("click",function(event) {
  if (event.target == CasaMordanModal) {
    CasaMordanModal.style.display = "none";
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


// Real Estate Modal

var btnEstate = document.querySelector(".btn_Estate")
var cerrarEstate = document.querySelector(".btn_cerrar_Estate")

var EstateModal = document.querySelector(".Estate_modal")


btnEstate.addEventListener("click",()=>{
  EstateModal.style.display = "flex"
})

cerrarEstate.addEventListener("click",()=>{
  EstateModal.style.display = "none"
})

window.addEventListener("click",function(event) {
  if (event.target == EstateModal) {
    EstateModal.style.display = "none";
  }
});


// Marketing

var btnMarketing = document.querySelector(".btn_Marketing")
var cerrarMarketing = document.querySelector(".btn_cerrar_Marketing")

var MarketingModal = document.querySelector(".Marketing_modal")


btnMarketing.addEventListener("click",()=>{
  MarketingModal.style.display = "flex"
})

cerrarMarketing.addEventListener("click",()=>{
  MarketingModal.style.display = "none"
})

window.addEventListener("click",function(event) {
  if (event.target == MarketingModal) {
    MarketingModal.style.display = "none";
  }
});


// Pomodoro

var btnPomodoro = document.querySelector(".btn_Pomodoro")
var cerrarPomodoro = document.querySelector(".btn_cerrar_Pomodoro")

var PomodoroModal = document.querySelector(".Pomodoro_modal")


btnPomodoro.addEventListener("click",()=>{
  PomodoroModal.style.display = "flex"
})

cerrarPomodoro.addEventListener("click",()=>{
  PomodoroModal.style.display = "none"
})

window.addEventListener("click",function(event) {
  if (event.target == PomodoroModal) {
    PomodoroModal.style.display = "none";
  }
});



// Portfolio

var btnPortfolio = document.querySelector(".btn_Portfolio")
var cerrarPortfolio = document.querySelector(".btn_cerrar_Portfolio")

var PortfolioModal = document.querySelector(".Portfolio_modal")


btnPortfolio.addEventListener("click",()=>{
  PortfolioModal.style.display = "flex"
})

cerrarPortfolio.addEventListener("click",()=>{
  PortfolioModal.style.display = "none"
})

window.addEventListener("click",function(event) {
  if (event.target == PortfolioModal) {
    PortfolioModal.style.display = "none";
  }
});

// Tracker

var btnTracker = document.querySelector(".btn_Tracker")
var cerrarTracker = document.querySelector(".btn_cerrar_Tracker")

var TrackerModal = document.querySelector(".Tracker_modal")


btnTracker.addEventListener("click",()=>{
  TrackerModal.style.display = "flex"
})

cerrarTracker.addEventListener("click",()=>{
  TrackerModal.style.display = "none"
})

window.addEventListener("click",function(event) {
  if (event.target == TrackerModal) {
    TrackerModal.style.display = "none";
  }
});








// ArteSublim
var btnArteSublim = document.querySelector(".btn_artesublim")
var cerrarArteSublim = document.querySelector(".btn_cerrar_artesublim")

var ArteSublimModal = document.querySelector(".artesublim_modal")


btnArteSublim.addEventListener("click",()=>{
  ArteSublimModal.style.display = "flex"
})

cerrarArteSublim.addEventListener("click",()=>{
  ArteSublimModal.style.display = "none"
})

window.addEventListener("click",function(event) {
  if (event.target == TrackerModal) {
    ArteSublimModal.style.display = "none";
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


// btn_services.forEach(btn_service => {
//   btn_service.addEventListener("click", (e)=>{
//     let service = e.target.parentNode.parentNode.querySelector("h3");
//     console.log(service)

//     input_subject.value = "I am interested in the service: " + service.textContent

//   })
  
// });


// // prueba

// var btnprueba = document.querySelector(".btn_prueba")
// var cerrarprueba = document.querySelector(".btn_cerrar_prueba")

// var pruebaModal = document.querySelector(".prueba_modal")


// btnprueba.addEventListener("click",()=>{
//   pruebaModal.style.display = "flex"
// })

// cerrarprueba.addEventListener("click",()=>{
//   pruebaModal.style.display = "none"
// })

// window.addEventListener("click",function(event) {
//   if (event.target == pruebaModal) {
//     pruebaModal.style.display = "none";
//   }
// });