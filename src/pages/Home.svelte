<script>
  import DocContent from "../components/mobile/DocContent.svelte";
  import FamilyContennt from "../components/mobile/FamilyContennt.svelte";
  import Procedures from "../components/mobile/Procedures.svelte";
  import MainWeb from "../components/web/MainWeb.svelte";
</script>

<main id="web-home fade">
  <div class="mobile">
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
</style>
