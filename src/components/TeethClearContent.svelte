<script>
  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";

  const openNewTab = (url) => {
    window.open(url, "_blank");
  };
</script>

<main class="fade" id="clear-start">
  <div class="section-1">
    <span class="title">CLAREAMENTO DENTAL</span>
    <small class="clear-description"
      >O clareamento dental é uma microlimpeza da estrututura do dente. Por
      causa de pigmentos externos, com o passar do tempo, o dente fica com uma
      cor mais amarelada. Por meio da ação dos radicais livres, como oxigênio, é
      provocada a oxidação dos pigmentos orgânicos agindo na oxidação de
      proteínas e aminoácidos, além da possibilidade do clareamento da estrutura
      mineral do dente.</small
    >
    <img src="./images/clareamento1.png" alt="clareamento" />
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

    .section-1 {
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

      small {
        font-size: 0.9rem;
        color: #333;
        text-align: center;
        margin: 1.5em 1em 0 1em;
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

      .accordion {
        margin-top: 0.8em;

        .small-header {
          font-size: 0.7rem;
          font-weight: bold;
        }

        .small-content {
          font-size: 0.8rem;
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
