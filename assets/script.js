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