//registrando os plugins no js
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

//criando um scroll suave
ScrollSmoother.create({
  smooth: 1.5, // quanto tempo (em segundos) leva para "alcançar" a posição de rolagem nativa.
  effects: true // procura atributos de velocidade de dados e atraso de dados em elementos
});
