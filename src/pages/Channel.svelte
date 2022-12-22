<script>
  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
</script>

<main class="fade" id="channel-start">
  <div class="section">
    <span class="title"> Tratamento de canal dentário </span>
    <img src="./images/channel.png" alt="canal" />
    <span class="title2"> Como é tratado um canal no dente? </span>
    <small>
      O tratamennto do canal da raiz dentária consiste na retirada da polpa do
      dente, que é um tecido encontrado na sua parte interna. Uma vez que a
      polpa foi danificada, infeccionada ou morta é removida, o espaço
      resultante deve ser limpo, preparado e preenchido. Esse procedimento veda
      o canal
    </small>
    <span class="title2"
      >Quais sintomas podem indicar a necessidade de tratamento de canal?</span
    >
    <div class="accordion">
      <Accordion>
        <Panel>
          <Header><span class="small-header"> Dor de dente </span></Header>
          <Content>
            <span class="small-content"
              >A dor de dente pode ser indicativo de inúmeros problemas. No caso
              do canal dentário, a dor acontece porque, provavelmente, o
              paciente está com uma cárie profunda e que já atingiu a polpa.
              Isso causa desconforto extremo, associado a uma dor constante e
              latejante. Outro sintoma comum é a sensibilidade na ingestão de
              comidas quentes ou geladas, dores no maxilar, ouvido e cabeça.</span
            >
          </Content>
        </Panel>
        <Panel>
          <Header><span class="small-header"> Inchaço na região </span></Header>
          <Content>
            <span class="small-content">
              O inchaço é um sintoma que indica claramente um risco de danos
              mais graves e a necessidade de realização de um tratamento de
              canal. O inchaço ao redor do dente ocorre em razão da existência
              de uma infecção e ele pode afetar não só o dente, mas também a
              pálpebra. Em casos mais sérios o paciente pode ter bolsas de pus e
              abscessos, e isso é sinal de infecção. E, quando não tratada, ela
              pode representar danos mais graves à saúde.
            </span></Content
          >
        </Panel>
        <Panel>
          <Header><span class="small-header"> Traumas na boca </span></Header>
          <Content>
            <span class="small-content">
              Eventuais traumas na boca podem causar o escurecimento do dente,
              afetando seu aspecto natural. Isso ocorre porque acidentes ou
              quedas graves com trauma na região que causam a ruptura nervosa da
              polpa levam à necrose. Nesse tipo de situação, é indicado realizar
              tratamento de canal dentário. O mesmo acontece no caso de uma
              fratura no dente que deixa o nervo exposto a infecções. Se o
              dentista diagnostica um quadro de exposição e risco, pode indicar
              a realização de tratamento de canal.
            </span></Content
          >
        </Panel>
        <Panel>
          <Header
            ><span class="small-header">
              Danos na estrutura dental
            </span></Header
          >
          <Content>
            <span class="small-content">
              Esse é um problema comum em que o paciente pode nem sentir dor, o
              que torna o diagnóstico mais difícil. Quando a estrutura do dente
              está debilitada e não há sintoma, o problema só é identificado
              após a realização de uma radiografia. Aqui, é importante destacar
              a relevância de realizar consultas frequentes com o seu dentista.
              Em geral, é nessas visitas que o profissional consegue identificar
              a saúde da sua boca e os eventuais exames preventivos que precisam
              ser feitos. A melhor forma de evitar danos mais graves é a
              promoção da sua saúde bucal. Você pode realizar um acompanhamento
              periódico, que pode ser feito de seis em seis meses ou conforme
              indicação do seu dentista.
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
