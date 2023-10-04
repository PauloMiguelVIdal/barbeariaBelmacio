document.addEventListener("DOMContentLoaded", () => {
    const cabelo = document.getElementById("cabelo");
    const barba = document.getElementById("barba");
    const cabeloB = document.getElementById("cabeloB");
const assinaturaCabelo = document.getElementById("assinaturaCabelo")
const assinaturaBarba = document.getElementById("assinaturaBarba")
const assinaturaCabeloBarba = document.getElementById("assinaturaCabeloBarba")

    cabelo.addEventListener("click",()=>{
if(cabelo.classList.contains("containerGridSec1")){
assinaturaCabelo.style.display="flex" 
assinaturaBarba.style.display="none" 
assinaturaCabeloBarba.style.display="none" 
alert("o display já é o sec 2")
}else if(cabelo.classList.contains("containerGridSec2")){
  assinaturaCabelo.style.display="flex" 
  assinaturaBarba.style.display="none" 
  assinaturaCabeloBarba.style.display="none" 
  alert("o display já é o sec1")
}else{
  alert("o display já é o principal")
}
    })



    // processos para ver os planos
//     cabelo.addEventListener("click", () => {
//         cabelo.classList.remove("containerGrid1")
//         barba.classList.remove("containerGrid2")
//         cabeloB.classList.remove("containerGrid3")
      
//     cabelo.classList.add("containerGridPrincipal")
//       barba.classList.add("containerGridSec1")
//       cabeloB.classList.add("containerGridSec2")

//       cabelo.classList.remove("containerGridSec1")
//       barba.classList.remove("containerGridSec2")
//       cabeloB.classList.remove("containerGridPrincipal")

//     cabelo.classList.remove("containerGridSec2")
//       barba.classList.remove("containerGridPrincipal")
//       cabeloB.classList.remove("containerGridSec1")

//       testeCabelo()
//     });
  
//     barba.addEventListener("click", () => {
//         cabelo.classList.remove("containerGrid1")
//         barba.classList.remove("containerGrid2")
//         cabeloB.classList.remove("containerGrid3")
        
//         barba.classList.add("containerGridPrincipal")
//         cabeloB.classList.add("containerGridSec1")
//         cabelo.classList.add("containerGridSec2")

//         barba.classList.remove("containerGridSec1")
//         cabeloB.classList.remove("containerGridSec2")
//         cabelo.classList.remove("containerGridPrincipal")
        
//         barba.classList.remove("containerGridSec2")
//         cabeloB.classList.remove("containerGridPrincipal")
//         cabelo.classList.remove("containerGridSec1")



//       });
    
//       cabeloB.addEventListener("click", () => {
//         cabelo.classList.remove("containerGrid1")
//         barba.classList.remove("containerGrid2")
//         cabeloB.classList.remove("containerGrid3")
//         cabeloB.classList.add("containerGridPrincipal")
//         cabelo.classList.add("containerGridSec1")
//         barba.classList.add("containerGridSec2")

//         cabeloB.classList.remove("containerGridSec1")
//         cabelo.classList.remove("containerGridSec2")
//         barba.classList.remove("containerGridPrincipal")

//         cabeloB.classList.remove("containerGridSec2")
//         cabelo.classList.remove("containerGridPrincipal")
//         barba.classList.remove("containerGridSec1")
//       });
        
//     const tituloC = document.getElementById("tituloC")
//     const preçoC = document.getElementById("preçoC")
//     const pMesC = document.getElementById("pMesC")
//     const assinarAgoraC = document.getElementById("assinarAgoraC")
//     const botaoMaisInfoC = document.getElementById("botaoMaisInfoC")
//     const containerPrincDirC = document.getElementById("containerPrincDirC")

//     const tituloB = document.getElementById("tituloC")
//     const preçoB = document.getElementById("preçoC")
//     const pMesB = document.getElementById("pMesC")
//     const assinarAgoraB = document.getElementById("assinarAgoraC")
//     const botaoMaisInfoB = document.getElementById("botaoMaisInfoC")
//     const containerPrincDirB = document.getElementById("containerPrincDirC")

//     const tituloBC = document.getElementById("tituloC")
//     const preçoBC = document.getElementById("preçoC")
//     const pMesBC = document.getElementById("pMesC")
//     const assinarAgoraBC = document.getElementById("assinarAgoraC")
//     const botaoMaisInfoBC = document.getElementById("botaoMaisInfoC")
//     const containerPrincDirBC = document.getElementById("containerPrincDirC")
// //criar o comparador que se identificar que é o principal ele alterara os displays
// cabelo.addEventListener("click",()=>{
// if(cabelo.classList.contains("containerGridPrincipal")){
// tituloC.style.display="block"
// preçoC.style.display="block"
// pMesC.style.display="flex"
// assinarAgoraC.style.display="flex"
// botaoMaisInfoC.style.display="none"
// containerPrincDirC.style.display="block"

// tituloB.style.display="none"
// preçoB.style.display="none"
// pMesB.style.display="none"
// assinarAgoraB.style.display="none"
// botaoMaisInfoB.style.display="none"
// containerPrincDirB.style.display="none"

// tituloBC.style.display="none"
// preçoBC.style.display="none"
// pMesBC.style.display="none"
// assinarAgoraBC.style.display="none"
// botaoMaisInfoBC.style.display="none"
// containerPrincDirBC.style.display="none"
// alert("CABELO1")

// }
// else if(cabelo.classList.contains("containerGridSec1")){
//   tituloC.style.display="none"
//   preçoC.style.display="none"
//   pMesC.style.display="none"
//   assinarAgoraC.style.display="none"
//   botaoMaisInfoC.style.display="none"
//   containerPrincDirC.style.display="none"
//   alert("CABELO2")
//   }
// else if(cabelo.classList.contains("containerGridSec2")){
//     tituloC.style.display="none"
//     preçoC.style.display="none"
//     pMesC.style.display="none"
//     assinarAgoraC.style.display="none"
//     botaoMaisInfoC.style.display="none"
//     containerPrincDirC.style.display="none"
//     alert("CABELO3")
//     }
// else{
//   alert("erro")
// }
// })


// barba.addEventListener("click",()=>{
// if(barba.classList.contains("containerGridPrincipal")){
//   tituloB.style.display="block"
//   preçoB.style.display="block"
//   pMesB.style.display="flex"
//   assinarAgoraB.style.display="flex"
//   botaoMaisInfoB.style.display="none"
//   containerPrincDirB.style.display="block"
//   alert("BARBA1")
//   }
//   else if(barba.classList.contains("containerGridSec1")){
//     tituloB.style.display="none"
//     preçoB.style.display="none"
//     pMesB.style.display="none"
//     assinarAgoraB.style.display="none"
//     botaoMaisInfoB.style.display="none"
//     containerPrincDirB.style.display="none"
//     alert("BARBA2")
//     }
//   else if(barba.classList.contains("containerGridSec2")){
//       tituloB.style.display="none"
//       preçoB.style.display="none"
//       pMesB.style.display="none"
//       assinarAgoraB.style.display="none"
//       botaoMaisInfoB.style.display="none"
//       containerPrincDirB.style.display="none"
//       alert("BARBA3")
//       }
//   else{
//     alert("erro")
//   }
//       })



//       cabeloB.addEventListener("click",()=>{    
//   if(cabeloB.classList.contains("containerGridPrincipal")){
//     tituloBC.style.display="block"
//     preçoBC.style.display="block"
//     pMesBC.style.display="flex"
//     assinarAgoraBC.style.display="flex"
//     botaoMaisInfoBC.style.display="none"
//     containerPrincDirBC.style.display="block"
//     alert("CABELOB1")
//     }
//     else if(cabeloB.classList.contains("containerGridSec1")){
//       tituloBC.style.display="none"
//       preçoBC.style.display="none"
//       pMesBC.style.display="none"
//       assinarAgoraBC.style.display="none"
//       botaoMaisInfoBC.style.display="none"
//       containerPrincDirBC.style.display="none"
//       alert("CABELOB2")
//       }
//     else if(cabeloB.classList.contains("containerGridSec2")){
//         tituloBC.style.display="none"
//         preçoBC.style.display="none"
//         pMesBC.style.display="none"
//         assinarAgoraBC.style.display="none"
//         botaoMaisInfoBC.style.display="none"
//         containerPrincDirBC.style.display="none"
//         alert("CABELOB3")
//         }
//     else{
//       alert("erro")
//     }
//       })
  

// if (containerGridPrincipal = on){

// }











//inicio
  // esses ficam off no inicio
  preço 
  pMes
  containerPrincDir



  //container principal fica off
  botaoMaisInfo

  //container principal fica on
  preço
pMes
containerPrincDir

  // fica off fica sec1 e sec2
  titulo
  preço
  pMes
  assinarAgora
  botaoMaisInfo
  containerPrincDir
});

