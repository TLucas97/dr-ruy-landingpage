<script>
  // @ts-nocheck

  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
  import Carousel from "svelte-carousel";

  let carousel;
</script>

<main class="fade" id="endodontia-start">
  <div class="section">
    <span class="title">
      Endodontia: tudo que você precisa saber sobre tratamento de canal
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
          <img src="./images/edodontia1.png" alt="" />
        </div>
        <div>
          <img src="./images/edodontia2.png" alt="" />
        </div>
        <div>
          <img src="./images/edodontia3.png" alt="" />
        </div>
        <div>
          <img src="./images/edodontia4.png" alt="" />
        </div>
      </Carousel>
    </div>
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
    <span class="title2">Quais são as principais doenças periodontais?</span>
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
              O que é necessário no tratamento?
            </span></Header
          >
          <Content>
            <span class="small-content"
              >Você está sofrendo com mau hálito? Tem sentido sensibilidade ou
              dor nos dentes? Está há mais de um ano sem visitar o dentista? Se
              respondeu “sim” para uma ou mais dessas perguntas, já é o momento
              de ficar alerta. A endodontia é indicada em duas situações
              específicas: traumas ou cáries em estado avançado. Em ambos os
              casos, o seu dentista vai fazer uma avaliação inicial, requerer
              exames — caso entenda necessário — e, se identificar danos mais
              sérios, encaminhar o seu caso para um especialista em endodontia.</span
            >
          </Content>
        </Panel>
        <Panel>
          <Header
            ><span class="small-header">
              O tratamento de canal dói?
            </span></Header
          >
          <Content>
            <span class="small-content"
              >Se você tem medo de ir ao dentista e, por essa razão, está
              postergando seu tratamento, temos uma ótima notícia. Em geral, o
              procedimento de canal não causa dores e é conduzido de maneira
              tranquila. Vale a pena procurar profissionais especializados, como
              os da Odontoclinic, para que seu tratamento aconteça da melhor
              forma possível e seu sorriso fique encantador. Além disso, existem
              vários materiais e equipamentos úteis para realizar esse processo
              de modo indolor, na intenção de acabar com as dores de dente.</span
            >
          </Content>
        </Panel>
      </Accordion>
    </div>
    <span class="title2">Quais são as etapas do tratamento de canal?</span>
    <div class="accordion">
      <Accordion>
        <Panel>
          <Header
            ><span class="small-header"> 1. anestesia e abertura </span></Header
          >
          <Content>
            <span class="small-content"
              >O primeiro passo do tratamento de canal inclui a anestesia do
              local e a abertura do dente. A abertura é realizada através da
              coroa e segue até a câmara da polpa dentária. O canal é feito com
              anestesia local, por meio de pequenas injeções na gengiva,
              próximas à base dos dentes. Alguns dentistas optam pelo uso de
              pomadas anestésicas, a fim de reduzir a sensação de picada da
              agulha. Geralmente, a anestesia não é dolorida, mas a impressão
              pode variar de um paciente para outro.</span
            >
          </Content>
        </Panel>
        <Panel>
          <Header
            ><span class="small-header">
              2. remoção do tecido infectado ou inflamado
            </span></Header
          >
          <Content>
            <span class="small-content"
              >Após anestesiar o local e proceder com a abertura da coroa, a
              etapa seguinte consiste na remoção de todo tecido infectado ou
              inflamado. São usadas limas especiais nessa fase. Depois de
              remover por completo toda a inflamação, o canal é modelado para
              receber o material da restauração. Além disso, é realizado o
              processo de irrigação, que limpa os canais e remove todos os
              resíduos.</span
            >
          </Content>
        </Panel>
        <Panel>
          <Header
            ><span class="small-header">
              3. restauração dos canais
            </span></Header
          >
          <Content>
            <span class="small-content"
              >Depois da remoção completa da inflamação e da higienização do
              local, o endodontista realiza a obturação dos canais com o
              material permanente. Geralmente, esse processo é realizado com um
              item chamado guta-percha, que contribui para manter os canais
              seguros contra infecções e contaminações. Essa é uma resina
              vegetal bastante utilizada na odontologia e muito bem-aceita pelos
              tecidos vivos. Tal substância é bem maleável e biocompatível,
              apresentando uma boa aderência aos radiculares durante a
              obturação.</span
            >
          </Content>
        </Panel>
        <Panel>
          <Header
            ><span class="small-header">
              4. reconstrução do dente
            </span></Header
          >
          <Content>
            <span class="small-content"
              >Após a obturação, se inicia o processo de restauração dentária.
              Nessa etapa, um material de preenchimento temporário é colocado no
              topo da guta-percha, com o propósito de vedar a abertura. Esse
              item permanece no local até que o dente receba a restauração ou
              uma coroa, que reproduz um dente natural e é colocada sobre o topo
              dentário. Em alguns casos, pode ser necessário colocar um pino na
              raiz, a fim de dar um suporte extra à coroa. A necessidade desse
              pino deverá ser avaliada pelo endodontista.</span
            >
          </Content>
        </Panel>
        <Panel>
          <Header
            ><span class="small-header"> 5. acabamento da coroa </span></Header
          >
          <Content>
            <span class="small-content"
              >Concluídas todas as etapas anteriores, é dado acabamento à coroa,
              fixada com cimento específico. A última parte do tratamento de
              canal é a restauração dentária. Nesse momento, o endodontista
              preenche o espaço criado em função da retirada de tecido com uma
              resina, recriando o formato original do dente. Como você pôde ver,
              o endodontista realiza um longo processo no tratamento do canal.
              Além de tratar lesões cariosas profundas, a endodontia também tem
              a função de corrigir fraturas e traumas dentários, que possam ter
              causado prejuízos na parte interna do dente. Concluídas todas as
              etapas anteriores, é dado acabamento à coroa, fixada com cimento
              específico. A última parte do tratamento de canal é a restauração
              dentária. Nesse momento, o endodontista preenche o espaço criado
              em função da retirada de tecido com uma resina, recriando o
              formato original do dente. Como você pôde ver, o endodontista
              realiza um longo processo no tratamento do canal. Além de tratar
              lesões cariosas profundas, a endodontia também tem a função de
              corrigir fraturas e traumas dentários, que possam ter causado
              prejuízos na parte interna do dente.
            </span>
          </Content>
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
        width: 90%;
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
        width: 99%;

        @media (min-width: 1024px) {
          width: 70%;
        }

        .small-header {
          font-size: 0.8rem;
          color: #333;
          font-weight: 600;
          text-transform: uppercase;

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
