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
  duration: 2.75
});

//animações das pictures
//animação dos herois
gsap.from("picture:nth-child(2)", {
  y: 100,
  duration: 2
})

//animação do demogorgão
gsap.from("picture:nth-Child(1)", {
  y: -80,
  duration: 2
});