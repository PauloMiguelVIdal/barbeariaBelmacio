document.addEventListener("DOMContentLoaded", () => {
    const cabelo = document.getElementById("cabelo");
    const barba = document.getElementById("barba");
    const cabeloB = document.getElementById("cabeloB");
  


    // processos para ver os planos
    cabelo.addEventListener("click", () => {
        cabelo.classList.remove("containerGrid1")
        barba.classList.remove("containerGrid2")
        cabeloB.classList.remove("containerGrid3")
      
    cabelo.classList.add("containerGridPrincipal")
      barba.classList.add("containerGridSec1")
      cabeloB.classList.add("containerGridSec2")

      cabelo.classList.remove("containerGridSec1")
      barba.classList.remove("containerGridSec2")
      cabeloB.classList.remove("containerGridPrincipal")

    cabelo.classList.remove("containerGridSec2")
      barba.classList.remove("containerGridPrincipal")
      cabeloB.classList.remove("containerGridSec1")
    });
  
    barba.addEventListener("click", () => {
        cabelo.classList.remove("containerGrid1")
        barba.classList.remove("containerGrid2")
        cabeloB.classList.remove("containerGrid3")
        
        barba.classList.add("containerGridPrincipal")
        cabeloB.classList.add("containerGridSec1")
        cabelo.classList.add("containerGridSec2")

        barba.classList.remove("containerGridSec1")
        cabeloB.classList.remove("containerGridSec2")
        cabelo.classList.remove("containerGridPrincipal")
        
        barba.classList.remove("containerGridSec2")
        cabeloB.classList.remove("containerGriPrincipal")
        cabelo.classList.remove("containerGridSec1")



      });
    
      cabeloB.addEventListener("click", () => {
        cabelo.classList.remove("containerGrid1")
        barba.classList.remove("containerGrid2")
        cabeloB.classList.remove("containerGrid3")
        cabeloB.classList.add("containerGridPrincipal")
        cabelo.classList.add("containerGridSec1")
        barba.classList.add("containerGridSec2")

        cabeloB.classList.remove("containerGridSec1")
        cabelo.classList.remove("containerGridSec2")
        barba.classList.remove("containerGridPrincipal")

        cabeloB.classList.remove("containerGridSec2")
        cabelo.classList.remove("containerGridPrincipal")
        barba.classList.remove("containerGridSec1")


      });
});

