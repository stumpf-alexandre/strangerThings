/*registrando os plugins no js*/
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

/*criando um scroll suave*/
ScrollSmoother.create({
  smooth: 1.5, /*quanto tempo (em segundos) leva para "alcançar" a posição de rolagem nativa*/
  effects: true /*procura atributos de velocidade de dados e atraso de dados em elementos*/
});

function animatePage() {
  /*animações da classe heroes*/
  gsap.from(".heroes", {
    opacity: 0,
    duration: 1.75
  });

  /*animações das pictures*/
  /*animação dos herois*/
  gsap.from("picture:nth-child(2)", {
    y: 100, //se move no eixo y
    duration: 1 //duração da animação
  });

  /*animação do demogorgão*/
  gsap.from("picture:nth-Child(1)", {
    y: -80, /*se move no eixo y*/
    duration: 1 /*duração da animação*/
  });

  /*animação dos cards*/
  gsap.from(".card", {
    opacity: 0, /*opacidade*/
    /*duration: 1,*/ /*duração da animação*/
    filter: "blur(30px)", /*da um desfoque no card*/
    stagger: .5, /*tempo que os elementos vão ser animados, um em relação ao outro*/
    scrollTrigger: {
      trigger: ".cards", /*onde os gatilhos vão ficar*/
      markers: false, /*marca os gatilhos de iniciar e finalizar na tela*/
      start: "0% 80%", /*posição do gatilho para iniciar a animação*/
      end: "100% 70%", /*posição do gatilho para finalizar a animação*/
      scrub: true /*faz com que a animação dependa do scroll para ser realizada e não do tempo*/
    }
  });

  /*animação do thanks*/
  gsap.from(".thanks ul li", {
    opacity: 0, /*opacidade*/
    x: 40, /*se move no eixo x*/
    filter: "blur(10px)", /*da um desfoque no texto*/
    stagger: .1, /*tempo que os elementos vão ser animados, um em relação ao outro*/
    /*duration: 1,*/ /*duração da animação*/
    scrollTrigger: {
      trigger: ".thanks ul",  /*onde os gatilhos vão ficar*/
      markers: false,  /*marca os gatilhos de iniciar e finalizar na tela*/
      start: "0% 80%",  /*posição do gatilho para iniciar a animação*/
      end: "100% 40%",  /*posição do gatilho para finalizar a animação*/
      scrub: 2 /*faz com que a animação dependa do scroll para ser realizada e não do tempo*/
    }
  });

  /*animação footer*/
  gsap.from("footer", {
    y: "-30%", /*se move no eixo Y*/
    immediateRender: false, /*renderiza a pagina primeiro e depois ela move no eixo x*/
    scrollTrigger: {
      trigger: "footer", /*onde os gatilhos vão ficar*/
      scrub: true, /*faz com que a animação dependa do scroll para ser realizada e não do tempo*/
      markers: false,  /*marca os gatilhos de iniciar e finalizar na tela*/
      invalidateOnRefresh: true, /*quando recarregar a pagina o trigger sera recarregada*/
      end: "100% 100%"  /*posição do gatilho para finalizar a animação*/
    }
  });

  /*animação de texto*/
  /*selecione todos os elementos com a classe textSplit*/
  const groupTextSplit = document.querySelectorAll(".textSplit");

  /*animar cada elemento deste grupo -> forEath*/
  groupTextSplit.forEach((singleTextSplit) => {
    const split = SplitText.create(singleTextSplit, {
      type: "lines, words, chars", /*dividir por palavras e caracteres*/
      mask: "lines", /*mascarar por linhas*/
    });
    gsap.from(split.chars, {
      y: 40, /*movendo no eixo y*/
      opacity: 0, /*opacidade*/
      duration: .5, /*tempo de duração da animação*/
      stagger: .03, /*tempo que os elementos vão ser animados, um em relação ao outro*/
      scrollTrigger: {
        trigger: singleTextSplit, /*onde os gatilhos vão ficar*/
        markers: false  /*marca os gatilhos de iniciar e finalizar na tela*/
      }
    });
  });
}

/*função para ajustar data-speed na pisture*/
function adjustDataSpeed() {
    const element = document.getElementById('myElement');
    if (!element) return;

    /*Obtém a largura atual da tela*/
    const width = window.innerWidth;

    /*Define os breakpoints (ex: mobile < 768px)*/
    if (width < 451) {
        /*Celular: muda para um valor maior (ex: .8)*/
        element.setAttribute("data-speed", ".8");
    } else {
        /*Desktop: volta para o valor original (.6)*/
        element.setAttribute("data-speed", ".6");
    }
}

/*Executa a função quando a página carrega*/
window.addEventListener('load', adjustDataSpeed);

/*Executa a função sempre que a tela for redimensionada*/
window.addEventListener('resize', adjustDataSpeed);

/*timeline*/
const tl = gsap.timeline({
  onComplete(){
    animatePage()
    gsap.to("#preLoader", {
      opacity: 0,
      display:"none"
    })
  }
});

/*préloader*/
tl.to("#preLoader path", { /*animação da path*/
  duration: 7,
  strokeDashoffset: 0
});

tl.to("#preLoader path", { /*animação do fill*/
  fill: "rgb(168, 19, 19)",
  duration: 1.5,
  strokeDashoffset: 0
});