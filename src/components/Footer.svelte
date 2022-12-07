<script>
  import GoogleMap from "./GoogleMap.svelte";
</script>

<main id="footer">
  <div class="footer-content">
    <img src="./images/logo.png" alt="" />
    <span>ODONTOLOGIA</span>
    <span>ESPECIALIZADA</span>
    <div class="socials">
      <img src="./images/facebook.svg" alt="fb" />
      <img src="./images/instagram.svg" alt="instagram" />
      <img src="./images/whatsapp.svg" alt="wpp" />
    </div>
    <GoogleMap />
    <div class="contact-area">
      <span>Fale com a gente</span>
      <div class="content">
        <div>
          <div class="left">📍</div>
          <div class="right">
            <span
              >123, Any Street North Your City Name Country Name. P.O 3554</span
            >
          </div>
        </div>
        <div>
          <div class="left">📞</div>
          <div class="right">
            <span>+1 234 567 8902</span>
          </div>
        </div>
        <div>
          <div class="left">📧</div>
          <div class="right">
            <span>+1 234 567 8902</span>
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
