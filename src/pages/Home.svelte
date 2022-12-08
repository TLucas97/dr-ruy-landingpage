<script>
  import DocContent from "../components/mobile/DocContent.svelte";
  import FamilyContennt from "../components/mobile/FamilyContennt.svelte";
  import Procedures from "../components/mobile/Procedures.svelte";
  import MainWeb from "../components/web/MainWeb.svelte";

  const openNewTab = (url) => {
    window.open(url, "_blank");
  };
</script>

<main id="web-home fade">
  <div class="mobile">
    <div class="fixed-wpp-icon">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        src="./images/whatsapp.svg"
        alt="wpp"
        on:click={() =>
          openNewTab("https://api.whatsapp.com/send?phone=5591988109828")}
      />
    </div>
    <DocContent />
    <FamilyContennt />
    <Procedures />
  </div>
  <div class="web">
    <MainWeb />
  </div>
</main>

<style lang="scss">
  main {
    .mobile {
      @media (min-width: 1280px) {
        display: none;
      }
    }
    .web {
      display: none;
      @media (min-width: 1280px) {
        display: block;
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
