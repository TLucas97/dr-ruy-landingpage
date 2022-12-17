<script>
  // @ts-nocheck
  import { globalContent } from "../../../store.js";
  import { useNavigate } from "svelte-navigator";
  import Carousel from "svelte-carousel";
  import GoogleMap from "../GoogleMap.svelte";

  const navigate = useNavigate();

  let procedures = $globalContent.simpleProcedures;
  let currentBg = "banner.png";

  const changeCurrentBgFromTimeToTime = () => {
    setInterval(() => {
      if (currentBg === "banner.png") {
        currentBg = "banner2.png";
      } else if (currentBg === "banner2.png") {
        currentBg = "banner3.png";
      } else if (currentBg === "banner3.png") {
        currentBg = "banner4.png";
      } else if (currentBg === "banner4.png") {
        currentBg = "banner.png";
      }
    }, 10000);
  };

  changeCurrentBgFromTimeToTime();

  const openNewTab = (url) => {
    window.open(url, "_blank");
  };

  const moveTo = (route, id) => {
    navigate(route);
    open = false;
    setTimeout(() => {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  let carousel;
</script>

<main id="web-start-view">
  <div class="fixed-wpp-icon">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img
      src="./images/whatsapp.svg"
      alt="wpp"
      on:click={() =>
        openNewTab("https://api.whatsapp.com/send?phone=5591988109828")}
    />
  </div>
  <div
    class="first-section-banner"
    style={`background-image: url('./images/${currentBg}')`}
  >
    <div class="main-title-content fade-left">
      <span class="title"> DR. RUY TORRES </span>
      <span class="contact-text"> Protocolo de carga imediata </span>
      <span class="contact-description">
        Tenha seus dentes de volta em 72 horas. Mastigue melhor, e levante sua
        auto estima.
      </span>
      <div class="btn-area">
        <button
          on:click={() => {
            moveTo("protese-carga-imediata", "protese-charge-start");
          }}>SAIBA MAIS</button
        >
      </div>
    </div>
  </div>
  <div class="overflow-card">
    <div class="doc-card-area">
      <div class="carousel-area">
        <Carousel
          bind:this={carousel}
          autoplay
          autoplayDuration={4500}
          autoplayProgressVisible
          arrows={false}
        >
          <div>
            <img src="./images/doc-banner.png" alt="" />
          </div>
          <div>
            <img src="./images/doc-banner2.png" alt="" />
          </div>
          <div>
            <img src="./images/doc-banner3.png" alt="" />
          </div>
          <div>
            <img src="./images/doc-banner4.png" alt="" />
          </div>
        </Carousel>
      </div>
      <div class="description">
        <span class="title">Dr. Ruy Torres</span>
        <span class="sub-title"> Cirugião Dentista </span>
        <span class="story">
          Ruy Torres é especialista em periodontia pela USP Bauru, pós graduado
          em implantes dentais pela Branemark System Bauru, também se
          especializou em implantontontia pela Universidade Estadual do Ceara,
          Pós Graduado na Fahl em Curitiba em estética dental e em lentes de
          contato pela Odonto Partners em São Paulo. Participou de diversos
          congressos no Brasil e no Exterior como ministrador e assistente.
        </span>
        <button
          on:click={() =>
            openNewTab("https://api.whatsapp.com/send?phone=5591988109828")}
          >Agendar consulta</button
        >
      </div>
    </div>
  </div>
  <div class="family-banner-area">
    <div class="family-content">
      <span class="title"
        >Tratamentos que oferecemos para você e sua família</span
      >
      <span class="description">
        Conheça todas as especialidades que CEIO oferece.
      </span>
      <span class="description">
        Nossa equipe conta com profissionais altamente qualificados e dispomos
        de ótima estrutura. Garantindo segurança e conforto para o seu
        tratamento.
      </span>
    </div>
    <img src="./images/family-banner.png" alt="family" />
  </div>
  <div class="results-banner-area">
    <div class="carousel-area">
      <Carousel
        bind:this={carousel}
        autoplay
        autoplayDuration={4500}
        autoplayProgressVisible
        arrows={false}
      >
        <div>
          <img src="./images/results1.png" alt="" />
        </div>
        <div>
          <img src="./images/results2.png" alt="" />
        </div>
        <div>
          <img src="./images/results3.png" alt="" />
        </div>
        <div>
          <img src="./images/results4.png" alt="" />
        </div>
        <div>
          <img src="./images/results5.png" alt="" />
        </div>
        <div>
          <img src="./images/results6.png" alt="" />
        </div>
      </Carousel>
    </div>
    <div class="family-content">
      <span class="title"
        >Transforme seu sorriso com a nossa odontologia de qualidade</span
      >
      <span class="description">
        "Veja os resultados incríveis nas imagens ao lado. Agende já sua
        consulta e surpreenda-se."
      </span>
      <button
        on:click={() =>
          openNewTab("https://api.whatsapp.com/send?phone=5591988109828")}
        >Agendar Consulta</button
      >
    </div>
  </div>
  <div class="places-banner-area">
    <div class="family-content">
      <span class="title"
        >Descubra a clínica odontológica de excelência em nossa localização
        privilegiada</span
      >
      <span class="description">
        Venha conhecer nossa clínica odontológica na área nobre da cidade.
        Oferecemos atendimento de qualidade em um ambiente acolhedor e
        tranquilo. Contamos com equipamentos modernos e tecnológicos para
        garantir o melhor para nossos pacientes. Estamos ansiosos para
        atendê-lo!
      </span>
      <button
        on:click={() =>
          openNewTab(
            "https://www.google.com/maps/dir//R.+Domingos+Marreiros,+49+-+F%C3%A1tima+Bel%C3%A9m+-+PA+66060-162/@-1.4468789,-48.4869065,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x92a48e984ca29323:0x23387a5169f38ec1"
          )}>Saiba mais</button
      >
    </div>
    <div class="carousel-area">
      <Carousel
        bind:this={carousel}
        autoplay
        autoplayDuration={4500}
        autoplayProgressVisible
        arrows={false}
      >
        <div>
          <GoogleMap height="350px" width="100%" />
        </div>
        <div>
          <img src="./images/place1.png" alt="" />
        </div>
        <div>
          <img src="./images/place2.png" alt="" />
        </div>
        <div>
          <img src="./images/place3.png" alt="" />
        </div>
      </Carousel>
    </div>
  </div>
  <div class="procedures-area">
    <div class="procedure-card">
      {#each procedures as procedure}
        <div class="procedure-card-content">
          <hr />
          <span class="title">{procedure.title}</span>
          <span class="description">{procedure.text}</span>
          <button
            on:click={() => {
              moveTo(procedure.to, procedure.id);
            }}>Saiba mais</button
          >
        </div>
      {/each}
    </div>
  </div>
</main>

<style lang="scss">
  main {
    width: 100%;
    background: #faf9f6;

    .first-section-banner {
      width: 100%;
      height: 600px;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .main-title-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .contact-text {
          font-size: 2.7em;
          font-weight: 600;
          color: #00bbdc;
          text-decoration: underline;
        }

        .contact-description {
          font-size: 1.4em;
          color: #000000;
          margin-top: 0.4em;
          width: 70%;
          text-align: center;
        }

        .btn-area {
          display: flex;
          justify-content: center;
          align-items: center;

          button {
            width: 200px;
            height: 50px;
            background: #00bbdc;
            border: none;
            border-radius: 5px;
            color: #ffffff;
            font-size: 1.2em;
            font-weight: 600;
            margin-top: 1.7em;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            transition: 0.3s ease-in-out;

            &:hover {
              background: #00bbdc9e;
              color: #ffffff;
            }
          }
        }
      }
    }

    .overflow-card {
      width: 55%;
      margin: 0 auto;
      background: #ffffff;
      position: absolute;
      /* centralize */
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 15px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      margin-top: 10em;

      .doc-card-area {
        display: flex;
        justify-content: space-between;
        padding: 1em;

        .carousel-area {
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        .description {
          width: 100%;
          margin-left: 1.2em;
          display: flex;
          flex-direction: column;

          .title {
            font-size: 2em;
            font-weight: 600;
            color: #00bbdc;
          }

          .sub-title {
            font-size: 1.2rem;
            font-weight: 500;
            color: #00000058;
          }

          .story {
            font-size: 0.8rem;
            font-weight: 400;
            color: #000000b2;
            margin-top: 1em;
            width: 80%;
          }

          button {
            width: 250px;
            height: 60px;
            background: #00bbdc;
            border: none;
            border-radius: 5px;
            color: #ffffff;
            font-size: 1.2em;
            font-weight: 600;
            margin-top: 1em;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            transition: 0.3s ease-in-out;

            &:hover {
              background: #00bbdc9e;
              color: #ffffff;
            }
          }
        }
      }
    }

    .family-banner-area {
      width: 100%;
      height: 500px;
      background: linear-gradient(
        to right,
        #091d3e,
        #1d3768,
        #1d3768,
        #1d3768,
        #091d3e
      );
      margin-top: 30em;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1em;

      .family-content {
        display: flex;
        flex-direction: column;
        color: #ffffff;
        width: 35%;

        .title {
          font-size: 1.8rem;
          font-weight: bold;
        }

        .description {
          font-size: 1rem;
          margin-top: 0.5em;
        }
      }

      img {
        width: 30%;
      }
    }

    .results-banner-area {
      width: 100%;
      height: 500px;
      background: linear-gradient(
        to right,
        #add8e6,
        #ffffff,
        #ffffff,
        #ffffff,
        #87cefa
      );
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1em;

      .family-content {
        display: flex;
        flex-direction: column;
        color: #ffffff;
        width: 30%;
        margin-bottom: 3em;

        .title {
          font-size: 1.8rem;
          color: black;
          font-weight: bold;
        }

        .description {
          font-size: 1rem;
          margin-top: 0.5em;
          color: black;
        }
      }

      .carousel-area {
        width: 35%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 2em;
        border: none;
      }

      img {
        width: 100%;
        height: 350px;
        border-radius: 8px;
        border: none;
        object-fit: fill;
      }

      button {
        width: 250px;
        height: 60px;
        background: #00bbdc;
        border: none;
        border-radius: 5px;
        color: #ffffff;
        font-size: 1.2em;
        font-weight: 600;
        margin-top: 1em;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transition: 0.3s ease-in-out;

        &:hover {
          background: #00bbdc9e;
          color: #ffffff;
        }
      }
    }

    .places-banner-area {
      width: 100%;
      height: 500px;
      background: linear-gradient(
        to right,
        #ffffff,
        #f2f2f2,
        #e5e3df,
        #e6e6e6,
        #fff7f7,
        #f7eaea
      );
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1em;

      .family-content {
        display: flex;
        flex-direction: column;
        color: #ffffff;
        width: 30%;
        margin-bottom: 1.7em;

        .title {
          font-size: 1.8rem;
          color: black;
          font-weight: bold;
        }

        .description {
          font-size: 1rem;
          margin-top: 0.5em;
          color: black;
        }
      }

      .carousel-area {
        width: 35%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 2em;
        border: none;
      }

      img {
        width: 100%;
        height: 350px;
        border-radius: 8px;
        border: none;
        object-fit: fill;
      }

      button {
        width: 250px;
        height: 60px;
        background: #00bbdc;
        border: none;
        border-radius: 5px;
        color: #ffffff;
        font-size: 1.2em;
        font-weight: 600;
        margin-top: 1em;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transition: 0.3s ease-in-out;

        &:hover {
          background: #00bbdc9e;
          color: #ffffff;
        }
      }
    }

    .procedures-area {
      width: 100%;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1em;

      .procedure-card {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-between;

        .procedure-card-content {
          width: 30%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          hr {
            width: 100%;
            border: 1px solid #00bbdc;
          }

          .title {
            font-size: 1.2rem;
            font-weight: 600;
            color: #00bbdc;
            margin-top: 1em;
          }

          .description {
            font-size: 1rem;
            font-weight: 400;
            color: #000000b2;
            margin-top: 0.5em;
            width: 80%;
            text-align: center;
          }

          button {
            width: 250px;
            height: 60px;
            background: #00bbdc;
            border: none;
            border-radius: 5px;
            color: #ffffff;
            font-size: 1.2em;
            font-weight: 600;
            margin-top: 2.3em;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            transition: 0.3s ease-in-out;

            &:hover {
              background: #00bbdc9e;
              color: #ffffff;
            }
          }
        }
      }
    }
  }

  .fixed-wpp-icon {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 1em;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    img {
      animation: pulse 2s infinite;
      border-radius: 50%;
    }

    &:hover {
      transform: scale(1.1);
    }

    @keyframes pulse {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(44, 204, 92, 0.4);
      }
      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
      }
      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
      }
    }
  }
</style>
