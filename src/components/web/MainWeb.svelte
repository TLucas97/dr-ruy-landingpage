<script>
  // @ts-nocheck
  import { globalContent } from "../../../store.js";
  import Dialog from "@smui/dialog";
  import TeethClearContent from "../TeethClearContent.svelte";
  import TeethContactContent from "../TeethContactContent.svelte";
  import ProtesysContent from "../ProtesysContent.svelte";

  $: open = $globalContent.open;
  let procedures = $globalContent.simpleProcedures;
  $: currentModalContent = $globalContent.currentModalContent;

  const openSpecificModal = (content) => {
    globalContent.update((data) => {
      return {
        ...data,
        open: true,
        currentModalContent: content,
      };
    });
  };

  const closeModal = () => {
    globalContent.update((data) => {
      return {
        ...data,
        currentModalContent: "",
        open: false,
      };
    });
  };

  const openNewTab = (url) => {
    window.open(url, "_blank");
  };
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
  <div class="first-section-banner">
    <div class="main-title-content fade-left">
      <span class="title"> DR. RUY TORRES </span>
      <span class="contact-text"> LENTES DE CONTATO </span>
      <span class="contact-description">
        PROCEDIMENTO SEGURO EFICAZ E COM RESULTADOS INCRIVEIS!
      </span>
      <div class="btn-area">
        <button on:click={() => openSpecificModal("contact")}>SAIBA MAIS</button
        >
      </div>
    </div>
  </div>
  <div class="overflow-card">
    <div class="doc-card-area">
      <img src="./images/doc-banner.png" alt="" />
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
  <div class="procedures-area">
    <div class="procedure-card">
      {#each procedures as procedure}
        <div class="procedure-card-content">
          <hr />
          <span class="title">{procedure.title}</span>
          <span class="description">{procedure.text}</span>
          <button on:click={() => openSpecificModal(procedure.currentContent)}
            >Saiba mais</button
          >
        </div>
      {/each}
    </div>
  </div>
  <Dialog
    bind:open
    scrimClickAction=""
    escapeKeyAction=""
    surface$style="width: 700px; max-width: calc(100vw - 32px);"
  >
    <button class="modal-close-btn" on:click={closeModal}>❌</button>
    {#if currentModalContent === "clear"}
      <TeethClearContent />
    {:else if currentModalContent === "contact"}
      <TeethContactContent />
    {:else if currentModalContent === "protesys"}
      <ProtesysContent />
    {/if}
  </Dialog>
</main>

<style lang="scss">
  main {
    width: 100%;
    background: #faf9f6;

    .first-section-banner {
      width: 100%;
      height: 600px;
      background-image: url("./images/banner.png");
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

        img {
          width: 70%;
          height: 100%;
          object-fit: cover;
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
      background: #091d3e;
      margin-top: 30em;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1em;

      .family-content {
        display: flex;
        flex-direction: column;
        color: #ffffff;
        width: 30%;

        .title {
          font-size: 1.8rem;
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

    .modal-close-btn {
      margin-top: 3em;
      padding: 1em;
      border: none;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      font-weight: bold;
      position: fixed;
      background: none;

      &:hover {
        transform: scale(1.1);
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
