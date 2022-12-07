<script>
  import DocContent from "../components/DocContent.svelte";
  import FamilyContennt from "../components/FamilyContennt.svelte";
  import Procedures from "../components/Procedures.svelte";
</script>

<main id="web-home fade">
  <div class="mobile">
    <DocContent />
    <FamilyContennt />
    <Procedures />
  </div>
  <div class="web">oien</div>
</main>

<style lang="scss">
  main {
    .mobile {
      @media (min-width: 1080px) {
        display: none;
      }
    }

    .web {
      display: none;
      @media (min-width: 1080px) {
        display: block;
      }
    }
  }
</style>
