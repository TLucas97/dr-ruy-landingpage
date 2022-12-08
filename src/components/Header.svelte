<script>
  // @ts-nocheck
  import IconButton from "@smui/icon-button";
  import Dialog from "@smui/dialog";
  import { useNavigate } from "svelte-navigator";

  let navigate = useNavigate();

  let open = false;

  const moveTo = (route, id) => {
    navigate(route);
    open = false;
    setTimeout(() => {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
</script>

<main class="header">
  <img src="./images/logo.png" alt="logo" />
  <IconButton
    class="material-icons"
    style="color: #fff"
    on:click={() => (open = true)}>menu</IconButton
  >
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
              moveTo("teeth-clear", "clear-start");
              open = false;
            }}>Clareamento Dental</button
          >
        </div>
        <div class="procedure-area">
          <button
            on:click={() => {
              moveTo("teeth-contact", "contact-start");
              open = false;
            }}>Lentes de contato</button
          >
        </div>
        <div class="procedure-area">
          <button
            on:click={() => {
              moveTo("proteses", "protese-start");
              open = false;
            }}>Tipos de prótese</button
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
    background-color: #2775ba;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    height: 70px;
    z-index: 9999;

    img {
      width: 50px;
      height: 50px;
      margin-left: 0.4em;
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
  }
</style>
