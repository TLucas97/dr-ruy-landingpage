<script>
  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";

  const openNewTab = (url) => {
    window.open(url, "_blank");
  };
</script>

<main class="fade" id="contact-start">
  <div class="section">
    <span class="title"> LENTE DE CONTATO DENTAL </span>
    <img src="./images/lente-de-contato.png" alt="lente" />
    <small
      >Para conquistar o sorriso perfeito, que tal se beneficiar da lente de
      contato dental? É ela que tem feito à cabeça dos famosos e de muita gente,
      pois tem aplicação rápida e corrige aquelas falhas e imperfeições de
      nossos dentes que não gostaríamos de exibir.</small
    >
    <small>
      É o procedimento sugerido para as pessoas que possuem características de
      espaçamentos entre os dentes, bem como o mau posicionamento dentário ou
      dentes irregulares, que geralmente promovem incômodos, tanto estéticos
      quanto de mobilidade e mastigação.
    </small>
    <small>
      A técnica é indolor, durável e possibilita um sorriso alinhado em apenas
      algumas horas a partir da sua aplicação. Para saber um pouco mais sobre a
      lente de contato dental, continue lendo.
    </small>
    <span class="title2">Perguntas frequentes</span>
    <div class="accordion">
      <Accordion>
        <Panel>
          <Header
            ><span class="small-header">
              O Clareamento danifica os dentes?
            </span></Header
          >
          <Content>
            <span class="small-content"
              >O dente pode ficar mais sensível, mas não poroso ou enfraquecido.
              Isso ocorre porque os poros ou canalículos ficam abertos para que
              o gel clareador libere as moléculas de pigmento que estavam
              impedindo a luz de passar. Porém, o procedimento não corrói o
              esmalte do dente e essa sensibilidade tende a diminuir após o
              tratamento.</span
            >
          </Content>
        </Panel>
        <Panel>
          <Header
            ><span class="small-header">
              Qualquer pessoa pode realizar o clareamento dental?
            </span></Header
          >
          <Content>
            <span class="small-content">
              O procedimento não é indicado para mulheres grávidas ou que
              estejam amamentando, pacientes com hipersensibilidade ao
              medicamento, indivíduos com doença periodontal e presença de
              muitas restaurações estéticas e/ou retrações gengivais. O
              clareamento também é contraindicado para crianças de até 10 anos.
            </span>
          </Content>
        </Panel>
        <Panel>
          <Header
            ><span class="small-header">
              O efeito do clareamento dental é permanente?
            </span></Header
          >
          <Content>
            <span class="small-content">
              Os resultados do tratamento podem durar entre 02 e 05 anos. Isso
              vai depender dos cuidados que o paciente vai ter. É importante
              manter a atenção com a alimentação (usar canudo para algumas
              bebidas pode ajudar), fazer uma boa higiene bucal e visitar
              regularmente o dentista.
            </span>
          </Content>
        </Panel>
      </Accordion>
      <div class="btn-area">
        <button
          on:click={() =>
            openNewTab("https://api.whatsapp.com/send?phone=5591988109828")}
          >Agende sua consulta</button
        >
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
      }

      small {
        font-size: 0.9rem;
        color: #333;
        text-align: center;
        margin: 1.5em 1em 0 1em;
      }

      .accordion {
        margin-top: 1em;

        .small-header {
          font-size: 0.7rem;
          color: #333;
          font-weight: 600;
        }

        .small-content {
          font-size: 0.8rem;
          color: #333;
          text-align: center;
        }
      }

      .btn-area {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1em;

        button {
          width: 70%;
          height: 2.5em;
          background-color: #333;
          color: #fff;
          border: none;
          border-radius: 0.2em;
          margin-top: 1em;
          font-size: 0.9rem;
          font-weight: bold;
          cursor: pointer;

          @media (min-width: 600px) {
            width: 60%;
          }
          @media (min-width: 768px) {
            width: 50%;
          }
        }
      }
    }
  }
</style>
