<script>
  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
</script>

<main class="fade" id="rehab-start">
  <div class="section">
    <span class="title"> Reabilitação oral com protocolo </span>
    <img src="./images/reabilitacao.png" alt="lente" />
    <small
      >A reabilitação oral tem como objetivo o reestabelecimento da função,
      estética e saúde do paciente. Dentre as várias opções reabilitadoras,
      temos a prótese do tipo protocolo que consiste em uma prótese fixa
      implanto suportada que tem como sua principal indicação a reabilitação de
      pacientes edentulos e que possuem a capacidade de reestabelecer a
      capacidade mastigatória, estética, fonética e o suporte da musculatura
      labial o que reflete nas relações psicossociais do paciente, interferindo
      positivamente na sua qualidade de vida.</small
    >
    <span class="title2">Tipos de procedimento</span>
    <div class="accordion">
      <Accordion>
        <Panel>
          <Header><span class="small-header"> Prótese fixa </span></Header>
          <Content>
            <span class="small-content"
              >A prótese dentária fixa é indicada para quem sofre com a perda de
              um (prótese unitária) ou diversos dentes (a do tipo parcial). Essa
              falta dental compromete a fala e a mastigação, sendo as próteses
              uma saída bastante eficaz, já que substituem os dentes originais e
              dão nova estabilidade à boca da pessoa.</span
            >
          </Content>
        </Panel>
        <Panel>
          <Header><span class="small-header"> Implantes </span></Header>
          <Content>
            <span class="small-content">
              Os implantes são peças feitas em material metálico com objetivo de
              substituir a raiz perdida do dente. Além disso, a implantação pode
              dar suporte à instalação de uma prótese na boca, restaurando a
              aparência bucal. O procedimento é recomendado para aqueles que
              apresentam algum dano nos dentes.
            </span></Content
          >
        </Panel>
        <Panel>
          <Header
            ><span class="small-header">
              Lentes de contato dental
            </span></Header
          >
          <Content>
            <span class="small-content">
              Diferentemente dos implantes, as lentes de contato são feitas em
              porcelana, resultando em um laminado com espessura entre 0,2 e 0,4
              mm. O método veio para revolucionar a restauração dos dentes,
              dando uma aparência natural ao sorriso. A lente finíssima é uma
              solução para corrigir a coloração, ajustar o espaço entre os
              dentes e auxiliar no tratamento ortodôntico.
            </span></Content
          >
        </Panel>
      </Accordion>
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
        width: 80%;
      }

      div {
        img {
          width: 100%;
          height: 380px;
          object-fit: cover;
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
