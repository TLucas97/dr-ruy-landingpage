<script>
  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
</script>

<main class="fade" id="protese-charge-start">
  <div class="section">
    <span class="title"> Protocolo de carga imediata </span>
    <img src="./images/charge.png" alt="lente" />
    <small
      >Esta técnica é consagrada na implantodontia , onde é feito a substituição
      da prótese total (dentadura) por dentes fixos na boca por implantes
      dentários. Pode ser realizado tanto na arcada superior como na inferior.</small
    >
    <small>
      A prótese protocolo sobre implante é uma das inúmeras soluções em
      implantes dentários que existem atualmente. Porém, a prótese protocolo
      ganha destaque por proporcionar a seus usuários uma função mastigatória
      perfeita, tornando-se tão natural quanto uma arcada dentária original.
    </small>
    <span class="title2">Perguntas frequentes</span>
    <div class="accordion">
      <Accordion>
        <Panel>
          <Header
            ><span class="small-header">
              Como é feito o tratamento?
            </span></Header
          >
          <Content>
            <span class="small-content"
              >Na prótese tipo protocolo sobre implantes, normalmente o
              tratamento é feito com carga imediata e o paciente fica livre da
              dentadura em 3 dias, voltando a ter dentes fixos, o que devolve a
              segurança, o conforto e o bem estar ao sorrir e comer.</span
            >
          </Content>
        </Panel>
        <Panel>
          <Header
            ><span class="small-header">
              Posso ter desconforto?
            </span></Header
          >
          <Content>
            <span class="small-content">
              Uma vez tomados os devidos cuidados e medicamentos, o processo
              costuma ser bem confortável, até mesmo mais do que extrações
              dentárias.
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
