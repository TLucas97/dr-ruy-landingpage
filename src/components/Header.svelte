<script>
  // @ts-nocheck
  import IconButton from "@smui/icon-button";
  import Dialog from "@smui/dialog";
  import { useNavigate } from "svelte-navigator";
  import Select, { Option } from "@smui/select";
  import { globalContent } from "../../store";

  let navigate = useNavigate();

  let open = false;
  let value = null;

  $: {
    if (value) {
      const [route, id] = value.split(" ");
      moveTo(route, id);
    }
  }

  const moveTo = (route, id) => {
    navigate(route);
    open = false;
    setTimeout(() => {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const openNewTab = (url) => {
    window.open(url, "_blank");
  };
</script>

<main class="header fade-top">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <img
    on:click={() => {
      moveTo("/", "mobile-doc-content");
    }}
    src="./images/logo.png"
    alt="logo"
  />
  <div class="menu-mobile-btn">
    <IconButton
      class="material-icons"
      style="color: #fff"
      on:click={() => (open = true)}>menu</IconButton
    >
  </div>
  <div class="menu-list">
    <button
      on:click={() => {
        moveTo("/", "web-start-view");
      }}>Início</button
    >
    <button on:click={() => moveTo("/", "footer")}>Contato</button>
    <button
      on:click={() => {
        moveTo("clareamento-dental", "clear-start");
      }}>Clareamento Dental</button
    >
    <button
      on:click={() => {
        moveTo("lente-de-contato", "contact-start");
      }}>Lentes de contato</button
    >
    <button
      on:click={() => {
        moveTo("protese-carga-imediata", "protese-charge-start");
      }}>Protése Protocolo - Carga Imediata</button
    >
    <Select bind:value variant="outlined">
      <Option value={null}>Procedimentos</Option>
      {#each $globalContent.otherProcedures as procedure}
        <Option value={procedure.to + " " + procedure.id}>
          <span>{procedure.title}</span>
        </Option>
      {/each}
    </Select>
  </div>
  <div class="btn-area">
    <button
      on:click={() =>
        openNewTab("https://api.whatsapp.com/send?phone=5591988109828")}
      >AGENDAR CONSULTA</button
    >
  </div>
  <Dialog bind:open fullscreen scrimClickAction="" escapeKeyAction="">
    <div class="modal-content">
      <div class="close-btn">
        <IconButton
          class="material-icons"
          style="color: #fff"
          on:click={() => (open = false)}>close</IconButton
        >
      </div>
      <div class="items">
        <button
          on:click={() => {
            moveTo("/", "mobile-doc-content");
          }}>Início</button
        >
        <button on:click={() => moveTo("/", "footer")}>Contato</button>
        <div class="procedure-area">
          <button
            on:click={() => {
              moveTo("clareamento-dental", "clear-start");
              open = false;
            }}>Clareamento Dental</button
          >
        </div>
        <div class="procedure-area">
          <button
            on:click={() => {
              moveTo("lente-de-contato", "contact-start");
              open = false;
            }}>Lentes de contato</button
          >
        </div>
        <div class="procedure-area">
          <button
            on:click={() => {
              moveTo("protese-carga-imediata", "protese-charge-start");
            }}>Protése Protocolo - Carga Imediata</button
          >
        </div>
        <div class="procedure-area">
          <button
            on:click={() => {
              moveTo("endodontia", "endodontia-start");
            }}>Endodontia</button
          >
        </div>
        <div class="procedure-area">
          <button
            on:click={() => {
              moveTo("periodontia", "periodontia-start");
            }}>Periodontia</button
          >
        </div>
        <div class="procedure-area">
          <button
            on:click={() => {
              moveTo("recobrimento-radicular", "recobrimento-radicular-start");
            }}>Recobrimento Radicular</button
          >
        </div>
        <div class="procedure-area">
          <button
            on:click={() => {
              moveTo("reabilitacao-oral", "rehab-start");
            }}>Reabilitação Oral</button
          >
        </div>
        <div class="procedure-area">
          <button
            on:click={() => {
              moveTo("canal-dentario", "channel-start");
            }}>Tratamento de canal dentário</button
          >
        </div>
      </div>
    </div>
  </Dialog>
</main>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(
      to right,
      #2775ba,
      #4677d6,
      #4677d6,
      #4677d6,
      #2775ba
    );
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    height: 70px;
    z-index: 9999;

    img {
      width: 50px;
      height: 50px;
      margin-left: 0.4em;
      cursor: pointer;
    }

    .menu-mobile-btn {
      @media (min-width: 1080px) {
        display: none;
      }
    }

    .modal-content {
      background: #2775ba;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      @media (min-width: 600px) {
        padding-bottom: 1em;
      }

      .close-btn {
        display: flex;
        justify-content: flex-end;
        padding: 0.5em;

        @media (min-width: 600px) {
          padding: 0;
        }
      }

      .items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 70%;

        button {
          background: none;
          border: none;
          color: white;
          margin: 1em 0;
          font-weight: 500;
        }
      }
    }

    .menu-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;

      @media (max-width: 1080px) {
        display: none;
      }

      button {
        border: none;
        margin: 0 1.5em;
        font-weight: bold;
        cursor: pointer;
        background-image: linear-gradient(
          to right,
          #54b3d6,
          #54b3d6 50%,
          #ffffff 50%
        );
        background-size: 200% 100%;
        background-position: -100%;
        display: inline-block;
        padding: 5px 0;
        position: relative;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease-in-out;

        &::before {
          content: "";
          background: #54b3d6;
          display: block;
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 3px;
          transition: all 0.3s ease-in-out;
        }

        &:hover {
          background-position: 0;

          &::before {
            width: 100%;
          }
        }
      }
    }

    .btn-area {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      margin-right: 0.5em;

      @media (max-width: 1080px) {
        display: none;
      }

      button {
        border-radius: 4px;
        background-color: #5ca1e1;
        border: none;
        color: #fff;
        text-align: center;
        padding: 16px;
        width: 220px;
        transition: all 0.5s;
        cursor: pointer;
        box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.7);
        display: inline-block;
        position: relative;
        transition: 0.5s;
        font-weight: bold;

        &::after {
          content: "»";
          position: absolute;
          opacity: 0;
          top: 16px;
          right: -20px;
          transition: 0.5s;
        }

        &:hover {
          padding-right: 24px;
          padding-left: 8px;

          &::after {
            opacity: 1;
            right: 10px;
          }
        }
      }
    }
  }
</style>
