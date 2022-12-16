<script>
  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
</script>

<main class="fade" id="protese-charge-start">
  <div class="section">
    <span class="title">
      Endodontia: tudo que você precisa saber sobre tratamento de canal
    </span>
    <img src="./images/edodontia.png" alt="lente" />
    <small
      >A endodontia é um ramo da odontologia que trata lesões e doenças da polpa
      e da raiz do dente. Os endodontistas são profissionais capacitados para
      tratar de problemas internos dos dentes. Popularmente, um indivíduo que
      trabalha nessa área é o especialista que cuida de canal dentário.</small
    >
    <small>
      A endodontia é uma área importante não só para a saúde, mas também para a
      estética, pois é responsável por tratar a estrutura interna do dente,
      mantendo a saúde e a vitalidade da arcada dentária.
    </small>
    <span class="title2">Perguntas frequentes</span>
    <div class="accordion">
      <Accordion>
        <Panel>
          <Header
            ><span class="small-header">
              Ajuda no tratamento de cáries?
            </span></Header
          >
          <Content>
            <span class="small-content"
              >A endodontia está diretamente relacionada com o tratamento de
              cáries. O paciente que tem esse problema e não realiza o
              procedimento adequado se arrisca a sofrer danos mais sérios na
              saúde bucal — em decorrência disso, surge a necessidade de uma
              intervenção endodôntica.</span
            >
          </Content>
        </Panel>
        <Panel>
          <Header
            ><span class="small-header">
              Quais sao as etapas do tratamento?
            </span></Header
          >
          <Content>
            <span class="small-content">
              A atuação do endodontista é recomendada quando uma lesão ou cárie
              significativa danifica a polpa do dente. Com a raiz infectada ou
              inflamada, o indivíduo busca tratamento com o especialista. O
              processo inclui até cinco fases, e elas podem variar de um
              paciente para o outro. Confira, a seguir, que etapas são essas e
              por que é tão importante buscar o suporte de um profissional com
              experiência e qualificação adequada para realizar tal
              procedimento.
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

    .section {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 1em;

      .title {
        color: #333;
        font-size: 1rem;
        font-weight: 600;
      }

      .title2 {
        color: #333;
        font-size: 1.2rem;
        font-weight: 600;
        margin-top: 1.5em;
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
        }
      }

      .accordion {
        margin-top: 1em;

        @media (min-width: 1024px) {
          width: 70%;
        }

        .small-header {
          font-size: 0.6rem;
          color: #333;
          font-weight: 600;

          @media (min-width: 1024px) {
            width: 70%;
            font-size: 0.8rem;
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
