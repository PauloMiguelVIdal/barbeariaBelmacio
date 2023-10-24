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
  const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show")
      } else {
        entry.target.classList.remove("show")
      }
    })
  })
  const elements = document.querySelectorAll(".escondido")
  elements.forEach((element) => myObserver.observe(element))



  // as constantes dos planos de assinatura
  const barbaAssinaturaCabelo = document.getElementById("barbaAssinaturaCabelo");
  const cabeloBAssinaturaCabelo = document.getElementById("cabeloBAssinaturaCabelo");

  const cabeloAssinaturaBarba = document.getElementById("cabeloAssinaturaBarba");
  const cabeloBAssinaturaBarba = document.getElementById("cabeloBAssinaturaBarba");

  const cabeloAssinaturaCabeloBarba = document.getElementById("cabeloAssinaturaCabeloBarba");
  const barbaAssinaturaCabeloBarba = document.getElementById("barbaAssinaturaCabeloBarba");

  const assinaturaCabelo = document.getElementById("assinaturaCabelo")
  const assinaturaBarba = document.getElementById("assinaturaBarba")
  const assinaturaCabeloBarba = document.getElementById("assinaturaCabeloBarba")


  
 //script que faz as interações do container plano de assinatura quando a tela é maior que 769px
  if (window.innerWidth > 769) {
    //interações que farão com que seja aberto o planbo de assinatura cabelo
    cabeloAssinaturaBarba.addEventListener("click", () => { 
      //abrirá o assinatura cabelo quando estiver no containerGridSec1 quando o barba for o principal
      if (cabeloAssinaturaBarba.classList.contains("containerGridSec1")) {
        assinaturaCabelo.style.display = "flex"
        assinaturaBarba.style.display = "none"
        assinaturaCabeloBarba.style.display = "none"
      } else if(cabeloAssinaturaBarba.classList.contains("containerGridSec2")) {
           //abrirá o assinatura cabelo quando estiver no containerGridSec2
        assinaturaCabelo.style.display = "flex"
        assinaturaBarba.style.display = "none"
        assinaturaCabeloBarba.style.display = "none"
      } 
    })
      //abrirá o assinatura cabelo o barba e cabelo for o principal
    cabeloAssinaturaCabeloBarba.addEventListener("click", () => {
      if (cabeloAssinaturaCabeloBarba.classList.contains("containerGridSec1")) {
      //abrirá o assinatura cabelo quando estiver no containerGridSec1 quando o barba e cabelo for o principal
        assinaturaCabelo.style.display = "flex"
        assinaturaBarba.style.display = "none"
        assinaturaCabeloBarba.style.display = "none"
      } else if (cabeloAssinaturaCabeloBarba.classList.contains("containerGridSec2")) {
      //abrirá o assinatura cabelo quando estiver no containerGridSec2 quando o barba e cabelo for o principal
        assinaturaCabelo.style.display = "flex"
        assinaturaBarba.style.display = "none"
        assinaturaCabeloBarba.style.display = "none"
      }
    })

    //interações que farão com que seja aberto o plano de assinatura barba
    barbaAssinaturaCabelo.addEventListener("click", () => {
      if (barbaAssinaturaCabelo.classList.contains("containerGridSec1")) {
              //abrirá o assinatura barba quando estiver no containerGridSec1 quando o cabelo for o principal
        assinaturaCabelo.style.display = "none"
        assinaturaBarba.style.display = "flex"
        assinaturaCabeloBarba.style.display = "none"
      } else if (barbaAssinaturaCabelo.classList.contains("containerGridSec2")) {
              //abrirá o assinatura barba quando estiver no containerGridSec2 quando o cabelo for o principal
        assinaturaCabelo.style.display = "none"
        assinaturaBarba.style.display = "flex"
        assinaturaCabeloBarba.style.display = "none"
      } 
    })

    barbaAssinaturaCabeloBarba.addEventListener("click", () => {
      if (barbaAssinaturaCabeloBarba.classList.contains("containerGridSec1")) {
              //abrirá o assinatura barba quando estiver no containerGridSec1 quando o cabelo e barba for o principal
        assinaturaCabelo.style.display = "none"
        assinaturaBarba.style.display = "flex"
        assinaturaCabeloBarba.style.display = "none"
      } else if (barbaAssinaturaCabeloBarba.classList.contains("containerGridSec2")) {
              //abrirá o assinatura barba quando estiver no containerGridSec2 quando o cabelo e barba for o principal
        assinaturaCabelo.style.display = "none"
        assinaturaBarba.style.display = "flex"
        assinaturaCabeloBarba.style.display = "none"

      } 
    })

 //interações que farão com que seja aberto o plano de assinatura cabelo e barba
    cabeloBAssinaturaCabelo.addEventListener("click", () => {
      if (cabeloBAssinaturaCabelo.classList.contains("containerGridSec1")) {
              //abrirá o assinatura barba quando estiver no containerGridSec1 quando o cabelo for o principal
        assinaturaCabelo.style.display = "none"
        assinaturaBarba.style.display = "none"
        assinaturaCabeloBarba.style.display = "flex"

      } else if (cabeloBAssinaturaCabelo.classList.contains("containerGridSec2")) {
              //abrirá o assinatura barba quando estiver no containerGridSec2 quando o cabelo for o principal
        assinaturaCabelo.style.display = "none"
        assinaturaBarba.style.display = "none"
        assinaturaCabeloBarba.style.display = "flex"

      } 
    })

    cabeloBAssinaturaBarba.addEventListener("click", () => {
      if (cabeloBAssinaturaBarba.classList.contains("containerGridSec1")) {
              //abrirá o assinatura barba quando estiver no containerGridSec1 quando o cabelo barba for o principal
        assinaturaCabelo.style.display = "none"
        assinaturaBarba.style.display = "none"
        assinaturaCabeloBarba.style.display = "flex"

      } else if (cabeloBAssinaturaBarba.classList.contains("containerGridSec2")) {
        //abrirá o assinatura barba quando estiver no containerGridSec2 quando o cabelo barba for o principal
        assinaturaCabelo.style.display = "none"
        assinaturaBarba.style.display = "none"
        assinaturaCabeloBarba.style.display = "flex"

      } else {

      }
    })
  }

 //script que faz as interações do container plano de assinatura quando a tela é menor que 769px

  if (window.innerWidth < 769) {
 //interações que farão com que seja aberto o plano de assinatura cabelo:
    cabeloAssinaturaBarba.addEventListener("click", () => {
      if (cabeloAssinaturaBarba.classList.contains("containerGridSec1")) {
              //abrirá o assinatura cabelo quando estiver no containerGridSec1 quando o barba for o principal
        assinaturaCabelo.style.display = "flex"
        assinaturaBarba.style.display = "none"
        assinaturaCabeloBarba.style.display = "none"
        assinaturaCabelo.scrollIntoView({ behavior: 'smooth' })
      //abrirá o assinatura cabelo quando estiver no containerGridSec2 quando o barba for o principal
      } else if (cabeloAssinaturaBarba.classList.contains("containerGridSec2")) {
        assinaturaCabelo.style.display = "flex"
        assinaturaBarba.style.display = "none"
        assinaturaCabeloBarba.style.display = "none"
        assinaturaCabelo.scrollIntoView({ behavior: 'smooth' })

      } 
    })

    cabeloAssinaturaCabeloBarba.addEventListener("click", () => {
      if (cabeloAssinaturaCabeloBarba.classList.contains("containerGridSec1")) {
              //abrirá o assinatura cabelo quando estiver no containerGridSec1 quando o cabelo e barba for o principal
        assinaturaCabelo.style.display = "flex"
        assinaturaBarba.style.display = "none"
        assinaturaCabeloBarba.style.display = "none"
        assinaturaCabelo.scrollIntoView({ behavior: 'smooth' })
      } else if (cabeloAssinaturaCabeloBarba.classList.contains("containerGridSec2")) {
              //abrirá o assinatura cabelo quando estiver no containerGridSec2 quando o cabelo e barba for o principal
        assinaturaCabelo.style.display = "flex"
        assinaturaBarba.style.display = "none"
        assinaturaCabeloBarba.style.display = "none"
        assinaturaCabelo.scrollIntoView({ behavior: 'smooth' })
      } 
    })
    //


     //interações que farão com que seja aberto o plano de assinatura barba:
    barbaAssinaturaCabelo.addEventListener("click", () => {
      if (barbaAssinaturaCabelo.classList.contains("containerGridSec1")) {
              //abrirá o assinatura barba quando estiver no containerGridSec1 quando o cabelo for o principal
        assinaturaCabelo.style.display = "none"
        assinaturaBarba.style.display = "flex"
        assinaturaCabeloBarba.style.display = "none"
        assinaturaBarba.scrollIntoView({ behavior: 'smooth' })

              //abrirá o assinatura barba quando estiver no containerGridSec2 quando o cabelo for o principal
      } else if (barbaAssinaturaCabelo.classList.contains("containerGridSec2")) {
        assinaturaCabelo.style.display = "none"
        assinaturaBarba.style.display = "flex"
        assinaturaCabeloBarba.style.display = "none"
        assinaturaBarba.scrollIntoView({ behavior: 'smooth' })

      }
    })
     //interações que farão com que seja aberto o plano de assinatura barba:

    barbaAssinaturaCabeloBarba.addEventListener("click", () => {
      if (barbaAssinaturaCabeloBarba.classList.contains("containerGridSec1")) {
              //abrirá o assinatura barba quando estiver no containerGridSec1 quando o cabelo e barba for o principal
        assinaturaCabelo.style.display = "none"
        assinaturaBarba.style.display = "flex"
        assinaturaCabeloBarba.style.display = "none"
        assinaturaBarba.scrollIntoView({ behavior: 'smooth' })

      } else if (barbaAssinaturaCabeloBarba.classList.contains("containerGridSec2")) {
              //abrirá o assinatura barba quando estiver no containerGridSec2 quando o cabelo e barba for o principal
        assinaturaCabelo.style.display = "none"
        assinaturaBarba.style.display = "flex"
        assinaturaCabeloBarba.style.display = "none"
        assinaturaBarba.scrollIntoView({ behavior: 'smooth' })

      } else {

      }
    })
     //interações que farão com que seja aberto o plano de assinatura cabelo e barba:

    cabeloBAssinaturaCabelo.addEventListener("click", () => {
              //abrirá o assinatura cabelo e barba quando estiver no containerGridSec1 quando o cabelo for o principal
      if (cabeloBAssinaturaCabelo.classList.contains("containerGridSec1")) {
        assinaturaCabelo.style.display = "none"
        assinaturaBarba.style.display = "none"
        assinaturaCabeloBarba.style.display = "flex"
        assinaturaCabeloBarba.scrollIntoView({ behavior: 'smooth' })

      } else if (cabeloBAssinaturaCabelo.classList.contains("containerGridSec2")) {
              //abrirá o assinatura cabelo e barba quando estiver no containerGridSec2 quando o cabelo for o principal
        assinaturaCabelo.style.display = "none"
        assinaturaBarba.style.display = "none"
        assinaturaCabeloBarba.style.display = "flex"
        assinaturaCabeloBarba.scrollIntoView({ behavior: 'smooth' })

      } 
    })

    cabeloBAssinaturaBarba.addEventListener("click", () => {
      if (cabeloBAssinaturaBarba.classList.contains("containerGridSec1")) {
              //abrirá o assinatura cabelo e barba quando estiver no containerGridSec1 quando o barba for o principal
        assinaturaCabelo.style.display = "none"
        assinaturaBarba.style.display = "none"
        assinaturaCabeloBarba.style.display = "flex"
        assinaturaCabeloBarba.scrollIntoView({ behavior: 'smooth' })

      } else if (cabeloBAssinaturaBarba.classList.contains("containerGridSec2")) {
              //abrirá o assinatura cabelo e barba quando estiver no containerGridSec2 quando o barba for o principal
        assinaturaCabelo.style.display = "none"
        assinaturaBarba.style.display = "none"
        assinaturaCabeloBarba.style.display = "flex"
        assinaturaCabeloBarba.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }


  // constantes marcas do nossos produtos
  const marcaNatura = document.getElementById("marcaNatura")
  const marcaGrandha = document.getElementById("marcaGrandha")
  const marcaMary = document.getElementById("marcaMary")
  const descNatura = document.getElementById("descNatura")
  const descGrandha = document.getElementById("descGrandha")
  const descMary = document.getElementById("descMary")


  //script de interações hover do nossos produtos
  marcaNatura.addEventListener("mouseover", () => {
    descNatura.style.display = "flex"
  })
  marcaNatura.addEventListener("mouseleave", () => {
    descNatura.style.display = "none"
  })
  marcaGrandha.addEventListener("mouseover", () => {
    descGrandha.style.display = "flex"
  })
  marcaGrandha.addEventListener("mouseleave", () => {
    descGrandha.style.display = "none"
  })
  marcaMary.addEventListener("mouseover", () => {
    descMary.style.display = "flex"
  })
  marcaMary.addEventListener("mouseleave", () => {
    descMary.style.display = "none"
  })


//constantes para navegação
  const navegação = document.getElementById("navegação")
  const navegaçãoCelular = document.getElementById("navegaçãoCelular")


  //script para substituir navegação baseado no tamanho de largura de tela
  function substituirNavegação() {
    const larguraTela = window.innerWidth;
    if (larguraTela < 1023) {
      navegação.style.display = "none";
      navegaçãoCelular.style.display = "flex";
    }
    else {
      navegação.style.display = "flex"
      navegaçãoCelular.style.display = "none"
      menuCell.style.display = "none"
    }
  }

  //script que escolhe o tamanho que se deve selecionar do slide show
  function selecionarTamanho() {
    const larguraTela = window.innerWidth;
    const tamanho = ["Maior", "Menor"]
    if (larguraTela > 767) {
      return tamanho[0]
    } else {
      return tamanho[1]
    }
  }

  //script que sempre que é recarregado a tela ele atualiza as funções
  window.addEventListener('load', () => {
    const tamanho = selecionarTamanho()
    atualizarImagens(tamanho);
    removerBotão();
    substituirNavegação();
  })

  //script que sempre que é redimensionado a tela ele atualiza as funções
  window.addEventListener('resize', () => {
    const tamanho = selecionarTamanho()
    atualizarImagens(tamanho);
    removerBotão();
    substituirNavegação();
  })


  //script responsável belo menu sanduiche do celular
  const menuCell = document.getElementById("menuCell")
  const botãoCell = document.getElementById("botãoCell")
  botãoCell.addEventListener("click", () => {
    if (menuCell.style.display === "block") {
      menuCell.style.display = "none"
    } else {
      menuCell.style.display = "block"
    }
  })
  window.addEventListener("scroll", () => {

    menuCell.style.display = "none"
  })

  // função de chamada para que seja alterada as imagens caso seja necessário
  function atualizarImagens(tamanho) {
    for (const id of ["cabelo", "infantil", "barba"]) {
      const imagemId = id + tamanho;
      const imagem = imagens[imagemId];

      if (imagem) {
        imagem();
      }
    }
  }

  // objeto que guarda os diretórios dos imagens do slide
  const imagens = {
    "cabeloMaior": () => cabelo.src = "./Slides/cabeloMaior.png",
    "cabeloMenor": () => cabelo.src = "./Slides/cabeloMenor.png",
    "infantilMaior": () => infantil.src = "./Slides/infantilMaior.png",
    "infantilMenor": () => infantil.src = "./Slides/infantilMenor.png",
    "barbaMaior": () => barba.src = "./Slides/barbaMaior.png",
    "barbaMenor": () => barba.src = "./Slides/barbaMenor.png"
  }
});