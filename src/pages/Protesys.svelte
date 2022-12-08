<script>
  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
</script>

<main class="fade" id="protese-start">
  <div class="section">
    <span class="title"> PRÓTESES TOTAL E PARCIAL </span>
    <img src="./images/proteses.png" alt="lente" />
    <small
      >A perda de alguns dentes pode ser provocada pela cárie, doenças nas
      gengivas e por traumatismos.</small
    >
    <small>
      As próteses são tratamentos utilizados para substituir os dentes que
      caíram por alguma razão. Elas oferecem ao paciente mais autoestima e mais
      segurança para comer, conversar e sorrir, justamente porque se parece
      exatamente como um dente.
    </small>
    <span class="title2">Conheça quais são:</span>
    <div class="accordion">
      <Accordion>
        <Panel>
          <Header><span class="small-header"> Prótese total </span></Header>
          <Content>
            <span class="small-content"
              >Essa prótese é a convencional dentadura, confeccionada para
              pacientes que perderam todos os dentes de uma ou das duas arcadas
              (superior e inferior).</span
            >
          </Content>
        </Panel>
        <Panel>
          <Header
            ><span class="small-header">
              Prótese parcial removível:
            </span></Header
          >
          <Content>
            <span class="small-content">
              A prótese parcial é formada por uma estrutura metálica e pelos
              dentes artificiais que substituirão os dentes que estiverem
              faltando. Esta estrutura metálica fica apoiada nos dentes sadios e
              tecidos adjacentes, possibilitando a mastigação e recuperando a
              estética do sorriso, com custos menores que os aplicados a
              reabilitações com implantes ou próteses parciais fixas.
            </span></Content
          >
        </Panel>
      </Accordion>
      <div class="btn-area">
        <button>Agende sua consulta</button>
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
        font-size: 0.7rem;
        color: #333;
        text-align: center;
        margin: 1.5em 1em 0 1em;
      }

      .accordion {
        margin-top: 1em;

        .small-header {
          font-size: 0.6rem;
          color: #333;
          font-weight: 600;
        }

        .small-content {
          font-size: 0.6rem;
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
          font-size: 0.7rem;
          font-weight: bold;

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
