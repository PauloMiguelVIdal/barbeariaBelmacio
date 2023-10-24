//código do slide show
document.addEventListener("DOMContentLoaded", () => {
let contagem = 1;
document.getElementById("radio1").checked = true;
setInterval(function () {
    nextImage()
}, 4000)

function nextImage() {
    contagem++;
    if (contagem > 3) {
        contagem = 1;
    }
    document.getElementById("radio" + contagem).checked = true
}

// script do botão para subir para o topo
const botãoSubir = document.getElementById("botãoSubir")

window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 180) {
            botãoSubir.style.display = "block";
        } else {
            botãoSubir.style.display = 'none';
        }
    })
})

botãoSubir.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
})


//script para o botão ser removido caso a tela tenha menos de 1023 px de largura
function removerBotão() {
    if (window.innerWidth < 1023) {
        botãoSubir.remove()
    }
}

//script para que adicione o efeito de aparecer os conteúdos
const myObserver = new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
  if(entry.isIntersecting){
    entry.target.classList.add("show")
  } else {
    entry.target.classList.remove("show")
  }
})
})
const elements = document.querySelectorAll(".escondido")


elements.forEach((element)=> myObserver.observe(element))


    const cabeloAssinaturaCabelo = document.getElementById("cabeloAssinaturaCabelo");
    const barbaAssinaturaCabelo = document.getElementById("barbaAssinaturaCabelo");
    const cabeloBAssinaturaCabelo = document.getElementById("cabeloBAssinaturaCabelo");
    
    const cabeloAssinaturaBarba = document.getElementById("cabeloAssinaturaBarba");
    const barbaAssinaturaBarba = document.getElementById("barbaAssinaturaBarba");
    const cabeloBAssinaturaBarba = document.getElementById("cabeloBAssinaturaBarba");
    
    const cabeloAssinaturaCabeloBarba = document.getElementById("cabeloAssinaturaCabeloBarba");
    const barbaAssinaturaCabeloBarba = document.getElementById("barbaAssinaturaCabeloBarba");
    const cabeloBAssinaturaCabeloBarba = document.getElementById("cabeloBAssinaturaCabeloBarba");
    
const assinaturaCabelo = document.getElementById("assinaturaCabelo")
const assinaturaBarba = document.getElementById("assinaturaBarba")
const assinaturaCabeloBarba = document.getElementById("assinaturaCabeloBarba")

//cabelo
if(window.innerWidth > 769){cabeloAssinaturaBarba.addEventListener("click",()=>{
  if(cabeloAssinaturaBarba.classList.contains("containerGridSec1")){
  assinaturaCabelo.style.display="flex" 
  assinaturaBarba.style.display="none" 
  assinaturaCabeloBarba.style.display="none" 
  
  }else if(cabeloAssinaturaBarba.classList.contains("containerGridSec2")){
    assinaturaCabelo.style.display="flex" 
    assinaturaBarba.style.display="none" 
    assinaturaCabeloBarba.style.display="none" 
    
  }else{
   
  }
  })
  
  cabeloAssinaturaCabeloBarba.addEventListener("click",()=>{
  if(cabeloAssinaturaCabeloBarba.classList.contains("containerGridSec1")){
  assinaturaCabelo.style.display="flex" 
  assinaturaBarba.style.display="none" 
  assinaturaCabeloBarba.style.display="none" 
  }else if(cabeloAssinaturaCabeloBarba.classList.contains("containerGridSec2")){
    assinaturaCabelo.style.display="flex" 
    assinaturaBarba.style.display="none" 
    assinaturaCabeloBarba.style.display="none" 
  }else{
  
  }
  })
  //
  
  
  //barba
  barbaAssinaturaCabelo.addEventListener("click",()=>{
    if(barbaAssinaturaCabelo.classList.contains("containerGridSec1")){
    assinaturaCabelo.style.display="none" 
    assinaturaBarba.style.display="flex" 
    assinaturaCabeloBarba.style.display="none" 
  
    }else if(barbaAssinaturaCabelo.classList.contains("containerGridSec2")){
      assinaturaCabelo.style.display="none" 
      assinaturaBarba.style.display="flex" 
      assinaturaCabeloBarba.style.display="none" 
  
    }else{
  
    }
    })
    
    barbaAssinaturaCabeloBarba.addEventListener("click",()=>{
    if(barbaAssinaturaCabeloBarba.classList.contains("containerGridSec1")){
    assinaturaCabelo.style.display="none" 
    assinaturaBarba.style.display="flex" 
    assinaturaCabeloBarba.style.display="none" 
    
    }else if(barbaAssinaturaCabeloBarba.classList.contains("containerGridSec2")){
      assinaturaCabelo.style.display="none" 
      assinaturaBarba.style.display="flex" 
      assinaturaCabeloBarba.style.display="none" 
  
    }else{
  
    }
    })
  
  //
  
  // cabelo b
  cabeloBAssinaturaCabelo.addEventListener("click",()=>{
    if(cabeloBAssinaturaCabelo.classList.contains("containerGridSec1")){
    assinaturaCabelo.style.display="none" 
    assinaturaBarba.style.display="none" 
    assinaturaCabeloBarba.style.display="flex" 
  
    }else if(cabeloBAssinaturaCabelo.classList.contains("containerGridSec2")){
      assinaturaCabelo.style.display="none" 
      assinaturaBarba.style.display="none" 
      assinaturaCabeloBarba.style.display="flex" 
  
    }else{
  
    }
    })
    
    cabeloBAssinaturaBarba.addEventListener("click",()=>{
    if(cabeloBAssinaturaBarba.classList.contains("containerGridSec1")){
    assinaturaCabelo.style.display="none" 
    assinaturaBarba.style.display="none" 
    assinaturaCabeloBarba.style.display="flex" 
  
    }else if(cabeloBAssinaturaBarba.classList.contains("containerGridSec2")){
      assinaturaCabelo.style.display="none" 
      assinaturaBarba.style.display="none" 
      assinaturaCabeloBarba.style.display="flex" 
  
    }else{
  
    }
   })
  }




  if(window.innerWidth < 769){cabeloAssinaturaBarba.addEventListener("click",()=>{
    if(cabeloAssinaturaBarba.classList.contains("containerGridSec1")){
    assinaturaCabelo.style.display="flex" 
    assinaturaBarba.style.display="none" 
    assinaturaCabeloBarba.style.display="none" 
    assinaturaCabelo.scrollIntoView({ behavior: 'smooth' })
    
    }else if(cabeloAssinaturaBarba.classList.contains("containerGridSec2")){
      assinaturaCabelo.style.display="flex" 
      assinaturaBarba.style.display="none" 
      assinaturaCabeloBarba.style.display="none" 
      assinaturaCabelo.scrollIntoView({ behavior: 'smooth' })
      
    }else{
     
    }
    })
    
    cabeloAssinaturaCabeloBarba.addEventListener("click",()=>{
    if(cabeloAssinaturaCabeloBarba.classList.contains("containerGridSec1")){
    assinaturaCabelo.style.display="flex" 
    assinaturaBarba.style.display="none" 
    assinaturaCabeloBarba.style.display="none" 
    assinaturaCabelo.scrollIntoView({ behavior: 'smooth' })
    }else if(cabeloAssinaturaCabeloBarba.classList.contains("containerGridSec2")){
      assinaturaCabelo.style.display="flex" 
      assinaturaBarba.style.display="none" 
      assinaturaCabeloBarba.style.display="none" 
      assinaturaCabelo.scrollIntoView({ behavior: 'smooth' })
    }else{
    
    }
    })
    //
    
    
    //barba
    barbaAssinaturaCabelo.addEventListener("click",()=>{
      if(barbaAssinaturaCabelo.classList.contains("containerGridSec1")){
      assinaturaCabelo.style.display="none" 
      assinaturaBarba.style.display="flex" 
      assinaturaCabeloBarba.style.display="none" 
      assinaturaBarba.scrollIntoView({ behavior: 'smooth' })

    
      }else if(barbaAssinaturaCabelo.classList.contains("containerGridSec2")){
        assinaturaCabelo.style.display="none" 
        assinaturaBarba.style.display="flex" 
        assinaturaCabeloBarba.style.display="none" 
        assinaturaBarba.scrollIntoView({ behavior: 'smooth' })
    
      }else{
    
      }
      })
      
      barbaAssinaturaCabeloBarba.addEventListener("click",()=>{
      if(barbaAssinaturaCabeloBarba.classList.contains("containerGridSec1")){
      assinaturaCabelo.style.display="none" 
      assinaturaBarba.style.display="flex" 
      assinaturaCabeloBarba.style.display="none" 
      assinaturaBarba.scrollIntoView({ behavior: 'smooth' })
      
      }else if(barbaAssinaturaCabeloBarba.classList.contains("containerGridSec2")){
        assinaturaCabelo.style.display="none" 
        assinaturaBarba.style.display="flex" 
        assinaturaCabeloBarba.style.display="none" 
        assinaturaBarba.scrollIntoView({ behavior: 'smooth' })
    
      }else{
    
      }
      })
    
    //
    
    // cabelo b
    cabeloBAssinaturaCabelo.addEventListener("click",()=>{
      if(cabeloBAssinaturaCabelo.classList.contains("containerGridSec1")){
      assinaturaCabelo.style.display="none" 
      assinaturaBarba.style.display="none" 
      assinaturaCabeloBarba.style.display="flex" 
      assinaturaCabeloBarba.scrollIntoView({ behavior: 'smooth' })

      }else if(cabeloBAssinaturaCabelo.classList.contains("containerGridSec2")){
        assinaturaCabelo.style.display="none" 
        assinaturaBarba.style.display="none" 
        assinaturaCabeloBarba.style.display="flex" 
        assinaturaCabeloBarba.scrollIntoView({ behavior: 'smooth' })
    
      }else{
    
      }
      })
      
      cabeloBAssinaturaBarba.addEventListener("click",()=>{
      if(cabeloBAssinaturaBarba.classList.contains("containerGridSec1")){
      assinaturaCabelo.style.display="none" 
      assinaturaBarba.style.display="none" 
      assinaturaCabeloBarba.style.display="flex" 
      assinaturaCabeloBarba.scrollIntoView({ behavior: 'smooth' })
    
      }else if(cabeloBAssinaturaBarba.classList.contains("containerGridSec2")){
        assinaturaCabelo.style.display="none" 
        assinaturaBarba.style.display="none" 
        assinaturaCabeloBarba.style.display="flex" 
        assinaturaCabeloBarba.scrollIntoView({ behavior: 'smooth' })
      }else{
    
      }
     })
    }

const marcaNatura = document.getElementById("marcaNatura")
const marcaGrandha = document.getElementById("marcaGrandha")
const marcaMary = document.getElementById("marcaMary")
const descNatura = document.getElementById("descNatura")
const descGrandha = document.getElementById("descGrandha")
const descMary = document.getElementById("descMary")
marcaNatura.addEventListener("mouseover",()=>{
descNatura.style.display="flex"
})
marcaNatura.addEventListener("mouseleave",()=>{
  descNatura.style.display="none"
})
marcaGrandha.addEventListener("mouseover",()=>{
descGrandha.style.display="flex"
})
marcaGrandha.addEventListener("mouseleave",()=>{
  descGrandha.style.display="none"
})
marcaMary.addEventListener("mouseover",()=>{
descMary.style.display="flex"
})
marcaMary.addEventListener("mouseleave",()=>{
  descMary.style.display="none"
})




 const navegação = document.getElementById("navegação")
 const navegaçãoCelular = document.getElementById("navegaçãoCelular")
 
 function substituirNavegação(){
     const larguraTela = window.innerWidth;
     if(larguraTela < 1023){
         navegação.style.display = "none";
         navegaçãoCelular.style.display = "flex";
     }
 else{
     navegação.style.display = "flex"
     navegaçãoCelular.style.display = "none"
     menuCell.style.display = "none"
 }
 }
 
 const slides = ["cabelo", "infantil", "barba"];



let cabelo = document.getElementById("cabelo")
let infantil = document.getElementById("infantil")
let barba = document.getElementById("barba")


const larguraTela = window.innerWidth;


function selecionarTamanho() {
    const larguraTela = window.innerWidth;
    const tamanho = ["Maior", "Menor"]
    if (larguraTela > 767) {
        return tamanho[0]

    } else {
        return tamanho[1]
    }
}

 window.addEventListener('load', () => {
  const tamanho = selecionarTamanho()
  atualizarImagens(tamanho);
  removerBotão();
  substituirNavegação();
})
window.addEventListener('resize', () => {
  const tamanho = selecionarTamanho()
  atualizarImagens(tamanho);
  removerBotão();
  substituirNavegação();
})
 
 
 
 const menuCell = document.getElementById("menuCell")
 const botãoCell = document.getElementById("botãoCell")
 botãoCell.addEventListener("click",()=>{
     if(menuCell.style.display==="block"){
         menuCell.style.display = "none"
     } else{
         menuCell.style.display = "block"
     }
 })


window.addEventListener("scroll",()=>{
  menuCell.style.display = "none"
})
  



 
function atualizarImagens(tamanho) {
  const imagensSelecionadas = tamanho === "Maior" ? Maior : Menor;
  for (const id of ["cabelo", "infantil", "barba"]) {
      const imagemId = id + tamanho;
      const imagem = imagens[imagemId];

      if (imagem) {
          imagem();
      }
  }
}

const Maior = ["cabeloMaior", "infantilMaior", "barbaMaior"]

const Menor = ["cabeloMenor", "infantilMenor", "barbaMenor"]

const imagens = {
    "cabeloMaior": () => cabelo.src = "./Slides/cabeloMaior.png",
    "cabeloMenor": () => cabelo.src = "./Slides/cabeloMenor.png",
    "infantilMaior": () => infantil.src = "./Slides/infantilMaior.png",
    "infantilMenor": () => infantil.src = "./Slides/infantilMenor.png",
    "barbaMaior": () => barba.src = "./Slides/barbaMaior.png",
    "barbaMenor": () => barba.src = "./Slides/barbaMenor.png"
}
});