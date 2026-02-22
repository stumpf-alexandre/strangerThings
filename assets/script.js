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
  y: 100,
  duration: 1
})

//animação do demogorgão
gsap.from("picture:nth-Child(1)", {
  y: -80,
  duration: 1
});

//animação dos cards
gsap.from(".card", {
  opacity: 0, //opacidade
  duration: 1, //duração da animação
  y: 30, //o card vem de baixo para sua posição
  filter: "blur(30px)", //da um desfoque no card
  stagger: .5, //tempo que os elementos vão ser animados, um por um
  scrollTrigger: {
    trigger: ".cards",
    markers: false,
    start: "0% 80%", //posição do gatilho para iniciar a animação
    end: "100% 70%", //posição do gatilho para finalizar a animação
    scrub: true //faz com que a animação dependa do scroll para ser realizada e não do tempo
  }
});