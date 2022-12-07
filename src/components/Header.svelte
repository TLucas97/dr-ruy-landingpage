<script>
  // @ts-nocheck

  import IconButton from "@smui/icon-button";
  import Dialog from "@smui/dialog";
  import MenuSurface from "@smui/menu-surface";

  let surface = MenuSurface;

  let open = false;

  let procedures = [
    {
      item: "Próteses total e parcial",
      link: "/",
    },
    {
      item: "Cirurgia oral menor",
      link: "/",
    },
    {
      item: "Clareamento dental",
      link: "/",
    },
    {
      item: "Lentes de contato",
      link: "/",
    },
    {
      item: "Bichectomia",
      link: "/",
    },
    {
      item: "Próteses sobre implantes",
      link: "/",
    },
    {
      item: "Periodontia",
      link: "/",
    },
  ];
</script>

<main class="header">
  <img src="./src/assets/logo.png" alt="logo" />
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
        <button>Início</button>
        <button>Contato</button>
        <div class="procedure-area">
          <button on:click={() => surface.setOpen(true)}>Procedimentos</button>
          <MenuSurface bind:this={surface} anchorCorner="BOTTOM_LEFT">
            <div class="procedure-list">
              {#each procedures as procedure}
                <button>
                  {procedure.item}
                </button>
              {/each}
            </div>
          </MenuSurface>
        </div>
        <button>Quem somos</button>
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

      .close-btn {
        display: flex;
        justify-content: flex-end;
        padding: 0.5em;
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

        .procedure-area {
          margin: 0 auto;
          width: 230px;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .procedure-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          padding: 1em;

          button {
            background: none;
            border: none;
            color: #000000a8;
          }
        }
      }
    }
  }
</style>
