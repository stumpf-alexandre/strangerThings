//registrando os plugins no js
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

//criando um scroll suave
ScrollSmoother.create({
  smooth: 1.5, // quanto tempo (em segundos) leva para "alcançar" a posição de rolagem nativa.
  effects: true // procura atributos de velocidade de dados e atraso de dados em elementos
});

//animações da classe heroes
gsap.from(".heroes", {
  opacity: 0,
  duration: 1.75
});

//animações das pictures
//animação dos herois
gsap.from("picture:nth-child(2)", {
  y: 100, //se move no eixo y
  duration: 1 //duração da animação
})

//animação do demogorgão
gsap.from("picture:nth-Child(1)", {
  y: -80, //se move no eixo y
  duration: 1 //duração da animação
});

//animação dos cards
gsap.from(".card", {
  opacity: 0, //opacidade
  //duration: 1, //duração da animação
  filter: "blur(30px)", //da um desfoque no card
  stagger: .5, //tempo que os elementos vão ser animados, um em relação ao outro
  scrollTrigger: {
    trigger: ".cards", //onde os gatilhos vão ficar
    markers: false, //marca os gatilhos de iniciar e finalizar na tela
    start: "0% 80%", //posição do gatilho para iniciar a animação
    end: "100% 70%", //posição do gatilho para finalizar a animação
    scrub: true //faz com que a animação dependa do scroll para ser realizada e não do tempo
  }
});

//animação do thanks
gsap.from(".thanks ul li", {
  opacity: 0, //opacidade
  x: 40, //se move no eixo x
  filter: "blur(10px)", //da um desfoque no texto
  stagger: .1, //tempo que os elementos vão ser animados, um em relação ao outro
  //duration: 1, //duração da animação
  scrollTrigger: {
    trigger: ".thanks ul",  //onde os gatilhos vão ficar
    markers: false,  //marca os gatilhos de iniciar e finalizar na tela
    start: "0% 80%",  //posição do gatilho para iniciar a animação
    end: "100% 40%",  //posição do gatilho para finalizar a animação
    scrub: 2 //faz com que a animação dependa do scroll para ser realizada e não do tempo
  }
});

//animação footer
gsap.from("footer", {
  y: "-30%",
  immediateRender: false,
  scrollTrigger: {
    trigger: "footer",
    scrub: true,
    markers: false,
    invalidateOnRefresh: true,
    end: "100% 100%"
  }
});







function adjustDataSpeed() {
    const element = document.getElementById('myElement');
    if (!element) return;

    // Obtém a largura atual da tela
    const width = window.innerWidth;

    // Define os breakpoints (ex: mobile < 768px)
    if (width < 451) {
        // Celular: muda para um valor maior (ex: .75)
        element.setAttribute("data-speed", ".75");
    } else {
        // Desktop: volta para o valor original (.6)
        element.setAttribute("data-speed", ".6");
    }
    
    // Opcional: ver no console a mudança
    console.log('Largura: ' + width + 'px, data-speed: ' + element.getAttribute('data-speed'));
}

// Executa a função quando a página carrega
window.addEventListener('load', adjustDataSpeed);

// Executa a função sempre que a tela for redimensionada
window.addEventListener('resize', adjustDataSpeed);
