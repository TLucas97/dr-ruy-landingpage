<script>
  export let height = "80px";
  export let width = ""
</script>

<div class="mapouter">
  <div class="gmap_canvas" style={`height: ${height}; width: ${width}`}>
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe
      class="gmap_iframe"
      width="100%"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=R. Domingos Marreiros, 49 - Umarizal, Belém - PA, 66055-210&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    /><a href="https://formatjson.org/">format json</a>
  </div>
  <style>
    .mapouter {
      position: relative;
      text-align: right;
      width: 100%;
      height: 50px;
      margin: 1em 0;
    }
    .gmap_canvas {
      overflow: hidden;
      background: none !important;
      width: 70%;
      margin: 0 auto;
    }
    .gmap_iframe {
      height: 400px !important;
    }
  </style>
</div>
