<script>
  // @ts-nocheck
  import IconButton from "@smui/icon-button";
  import Dialog from "@smui/dialog";
  import { useNavigate } from "svelte-navigator";

  let navigate = useNavigate();

  let open = false;

  const moveTo = (id) => {
    open = false;
    setTimeout(() => {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };
</script>

<main class="header" id="start">
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
            moveTo("start");
            navigate("/");
          }}>Início</button
        >
        <button on:click={() => moveTo("footer")}>Contato</button>
        <div class="procedure-area">
          <button>Procedimentos</button>
        </div>
        <button
          on:click={() => {
            navigate("doc");
            open = false;
          }}>Quem somos</button
        >
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
