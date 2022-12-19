<script>
  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
</script>

<main class="fade" id="protese-charge-start">
  <div class="section">
    <span class="title">
      Recobrimento Radicular: tratamento para gengiva exposta
    </span>
    <img src="./images/radicular.png" alt="lente" />
    <small
      >A periodontia passou por grandes transformações nos últimos anos, tanto
      nos avanços científicos como na tecnologia, um dos procedimentos que
      evoluiu muito nos últimos 15 anos é o recobrimento radicular, tratamento
      para recessão gengival.</small
    >
    <small>
      Hoje existe uma preocupação especial com a manutenção do tecido
      periodontal, desde o cuidado para mantê-lo saudável até com as
      alternativas possíveis de enxerto. Essa nova perspectiva permitiu que os
      procedimentos tenham uma maior previsibilidade e se enquadrem nas
      preferências do paciente.
    </small>
    <span class="title2">Perguntas frequentes</span>
    <div class="accordion">
      <Accordion>
        <Panel>
          <Header
            ><span class="small-header">
              Oque é o recobrimento radicular?
            </span></Header
          >
          <Content>
            <span class="small-content"
              >Radicular significa algo que pertence ou diz respeito à raiz,
              assim sendo, fica óbvio que o recobrimento radicular gengival é o
              tecido gengival que envolve raiz do dente na linha da gengiva.</span
            >
          </Content>
        </Panel>
        <Panel>
          <Header
            ><span class="small-header">
              Há algum tipo de técnica?
            </span></Header
          >
          <Content>
            <span class="small-content">
              Hoje, já existem técnicas cirúrgicas alternativas que evitam a
              necessidade do uso do tecido de enxerto conjuntivo do próprio
              paciente, optando-se pelo uso de tecido de origem homógena (pouco
              utilizada no Brasil), e mais recentemente o uso de biomaterial
              animal, proveniente de suínos, com muita segurança, baixo custo,
              boa previsibilidade de resultados e, o melhor: com menos
              sofrimento para o paciente.
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
