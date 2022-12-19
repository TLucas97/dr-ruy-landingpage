<script>
  // @ts-nocheck

  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
  import Carousel from "svelte-carousel";

  let carousel;
</script>

<main class="fade" id="periodontia-start">
  <div class="section">
    <span class="title">
      Periodontia: tudo o que você deve saber sobre essa especialidade da
      odontologia
    </span>
    <div class="carousel-area">
      <Carousel
        bind:this={carousel}
        autoplay
        autoplayDuration={4500}
        autoplayProgressVisible
        arrows={false}
      >
        <div>
          <img src="./images/periodontia.png" alt="" />
        </div>
        <div>
          <img src="./images/periodontia1.png" alt="" />
        </div>
        <div>
          <img src="./images/periodontia2.png" alt="" />
        </div>
        <div>
          <img src="./images/periodontia3.png" alt="" />
        </div>
        <div>
          <img src="./images/periodontia4.png" alt="" />
        </div>
      </Carousel>
    </div>
    <small
      >Periodontia é a especialidade odontológica que trata dos tecidos do
      periodonto, ou seja, aqueles que dão sustentação para os dentes. Seus
      procedimentos objetivam prevenir, diagnosticar e tratar problemas e
      doenças que atingem a gengiva, o ligamento periodontal e o osso alveolar.
      O especialista dessa área é o periodontista.
    </small>
    <span class="title2">Quais são as principais doenças periodontais?</span>
    <div class="accordion">
      <Accordion>
        <Panel>
          <Header><span class="small-header"> Gengivite </span></Header>
          <Content>
            <span class="small-content"
              >“A gengivite é a inflamação da gengiva, causada, no geral, por
              acúmulos bacterianos, placa e biofilme em volta dos dentes.”,
              explica Luís Henrique. Esse é um problema muito comum de ver nos
              consultórios e que pode atingir pessoas de todas as idades —
              principalmente por causa da má higienização.</span
            >
          </Content>
        </Panel>
        <Panel>
          <Header><span class="small-header"> Periodontite </span></Header>
          <Content>
            <span class="small-content">
              Quando não tratada, a tendência da gengivite é continuar se
              agravando. Essa inflamação, então, pode alcançar outras estruturas
              e evoluir para a periodontite, que afeta tecidos mais profundos do
              periodonto. Esse quadro é bem mais severo e pode se tornar
              infeccioso, atingir os ligamentos periodontais e o osso alveolar,
              que mantêm os dentes presos à boca. Quando não tratada, a
              periodontite pode levar à perda dentária.
            </span></Content
          >
        </Panel>
        <Panel>
          <Header><span class="small-header"> Abscesso dentário </span></Header>
          <Content>
            <span class="small-content">
              O abscesso também é um tipo de inflamação, só que, nesse caso,
              existe a produção de pus em um ponto específico da boca — ao redor
              do dente ou na raiz dele. Existem dois tipos de abscesso:
              periodontal e periapical. Em ambos os casos, ocorre a formação de
              um nódulo purulento, que provoca dor e incômodo. Ele é causado por
              uma infecção bacteriana que não recebeu o tratamento adequado,
              levando ao acúmulo de bactérias, líquido inflamatório e células
              mortas.
            </span></Content
          >
        </Panel>
      </Accordion>
    </div>
    <span class="title2">Quais são as áreas da periodontia?</span>
    <div class="accordion">
      <Accordion>
        <Panel>
          <Header
            ><span class="small-header">
              Periodontia clínica e médica
            </span></Header
          >
          <Content>
            <span class="small-content"
              >Essa área é voltada para a prevenção e o tratamento das doenças
              na gengiva e demais tecidos periodontais. Os procedimentos são
              terapêuticos, visando, principalmente, ao equilíbrio da saúde da
              boca. A área clínica cuida das doenças de gengiva mesmo, atuamos
              diretamente na boca do paciente. Falamos muito da área médica,
              como medicina periodontal, e da relação com doenças sistêmicas que
              agravam o problema periodontal, como diabetes e tabagismo.</span
            >
          </Content>
        </Panel>
        <Panel>
          <Header
            ><span class="small-header"> Periodontia estética </span></Header
          >
          <Content>
            <span class="small-content">
              A periodontia estética, por sua vez, é aquela que objetiva
              promover simetria entre os tecidos do periodonto, os dentes e a
              face da pessoa de um modo geral. São realizados procedimentos e
              tratamentos para harmonizar o conjunto. É o que acontece, por
              exemplo, com pessoas que apresentam sorriso gengival. Nesse caso,
              muitas vezes, há um crescimento exagerado da gengiva, e o
              periodontista realiza intervenções para reduzir o tamanho dela, a
              fim de promover um aumento da coroa e deixar os dentes mais
              evidentes.
            </span></Content
          >
        </Panel>
      </Accordion>
    </div>
    <div class="btn-area">
      <a
        href="https://api.whatsapp.com/send?phone=5591988109828"
        target="
        _blank"
        rel="noreferrer"
      >
        <button>Agende sua consulta</button>
      </a>
    </div>
  </div>
</main>

<style lang="scss">
  main {
    width: 100%;
    background-color: #f5f5f5;
    padding: 4em 0;

    .carousel-area {
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 1080px) {
        width: 95%;
      }

      div {
        img {
          width: 100%;
          height: 300px;
          object-fit: fill;
          border-radius: 8px;
        }
      }
    }

    .section {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 1em;

      .title {
        color: #333;
        font-size: 1.3rem;
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;
        margin-top: 1em;
      }

      .title2 {
        color: #333;
        font-size: 1.2rem;
        font-weight: 600;
        margin-top: 2.5em;
        text-align: center;
      }

      img {
        width: 80%;
        margin-top: 1em;

        @media (min-width: 600px) {
          width: 60%;
        }
        @media (min-width: 768px) {
          width: 50%;
        }
        @media (min-width: 1024px) {
          width: 30%;
        }
      }

      small {
        font-size: 0.7rem;
        color: #333;
        text-align: center;
        margin: 1.5em 1em 0 1em;

        @media (min-width: 1024px) {
          width: 70%;
          font-size: 0.9rem;
        }
      }

      .accordion {
        margin-top: 1em;

        @media (min-width: 1024px) {
          width: 70%;
        }

        .small-header {
          font-size: 0.9rem;
          color: #333;
          font-weight: 600;

          @media (min-width: 880px) {
            width: 70%;
            font-size: 1rem;
          }
        }

        .small-content {
          font-size: 0.6rem;
          color: #333;
          text-align: center;

          @media (min-width: 1024px) {
            font-size: 0.8rem;
          }
        }
      }

      .btn-area {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1em;
        text-decoration: none;
        width: 100%;
        a {
          width: 300px;
          button {
            width: 100%;
            height: 2.5em;
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 0.2em;
            font-size: 0.7rem;
            font-weight: bold;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
