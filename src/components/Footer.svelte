<script>
  import GoogleMap from "./GoogleMap.svelte";

  const openNewTab = (url) => {
    window.open(url, "_blank");
  };
</script>

<main id="footer">
  <div class="footer-content">
    <img src="./images/logo.png" alt="" />
    <span>ODONTOLOGIA</span>
    <span>ESPECIALIZADA</span>
    <div class="socials">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        src="./images/facebook.svg"
        alt="fb"
        on:click={() => openNewTab("https://www.facebook.com/rtodontopa/")}
      />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        src="./images/instagram.svg"
        alt="instagram"
        on:click={() => openNewTab("https://www.instagram.com/rtodontopa/")}
      />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        src="./images/whatsapp.svg"
        alt="wpp"
        on:click={() =>
          openNewTab("https://api.whatsapp.com/send?phone=5591988109828")}
      />
    </div>
    <GoogleMap />
    <div class="contact-area">
      <span>Fale com a gente</span>
      <div class="content">
        <div>
          <div class="left">📍</div>
          <div class="right">
            <span
              >R. Domingos Marreiros, 49 - Umarizal, Belém - PA, 66055-210</span
            >
          </div>
        </div>
        <div>
          <div class="left">📞</div>
          <div class="right">
            <span>(91) 98810-9828</span>
          </div>
        </div>
        <div>
          <div class="left">📧</div>
          <div class="right">
            <span>torresdentist@yahoo.com.br</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style lang="scss">
  main {
    width: 100%;
    height: 480px;
    background: #2775ba;
    color: white;

    .footer-content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;

      img {
        width: 50px;
        height: 50px;
        margin-bottom: 0.2em;
      }

      span {
        font-weight: bold;
      }

      .socials {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1em;

        img {
          width: 30px;
          height: 30px;
          margin: 0 0.5em;

          cursor: pointer;

          @media (min-width: 1280px) {
            width: 60px;
            height: 60px;
          }
        }
      }

      .contact-area {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1em;
        flex-direction: column;

        span {
          font-weight: bold;
          font-size: 0.7rem;
        }

        .content {
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
          margin-top: 0.5em;

          span {
            font-weight: 300;
          }

          div {
            display: flex;
            margin: 0.4em 0;

            .left {
              margin-right: 0.5em;
            }

            .right {
              width: 120px;
            }
          }
        }
      }
    }
  }
</style>
