<script>
  const openNewTab = (url) => {
    window.open(url, "_blank");
  };
</script>

<main>
  <img src="./images/place1.png" alt="family" />
  <span class="title"
    >Descubra a clínica odontológica de excelência em nossa localização
    privilegiada</span
  >
  <div class="description">
    <span>
      Venha conhecer nossa clínica odontológica na área nobre da cidade.
      Oferecemos atendimento de qualidade em um ambiente acolhedor e tranquilo.
      Contamos com equipamentos modernos e tecnológicos para garantir o melhor
      para nossos pacientes. Estamos ansiosos para atendê-lo!
    </span>
  </div>
  <button
    on:click={() =>
      openNewTab(
        "https://www.google.com/maps/dir//R.+Domingos+Marreiros,+49+-+F%C3%A1tima+Bel%C3%A9m+-+PA+66060-162/@-1.4468789,-48.4869065,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x92a48e984ca29323:0x23387a5169f38ec1"
      )}>Saiba mais</button
  >
</main>

<style lang="scss">
  main {
    background: linear-gradient(
      to right,
      #ffffff,
      #f2f2f2,
      #e5e3df,
      #e6e6e6,
      #fff7f7,
      #f7eaea
    );
    padding: 1.5em;
    display: flex;
    flex-direction: column;

    img {
      width: 80%;
      margin: 0 auto;

      @media (min-width: 768px) {
        width: 50%;
      }
    }

    span {
      color: rgb(0, 0, 0);

      @media (min-width: 768px) {
        width: 50%;
        text-align: center;
        margin: 0 auto;
      }
    }

    .title {
      font-size: 1.2rem;
      font-weight: bold;
      margin-top: 1em;
      text-decoration: underline;
    }

    .description {
      margin-top: 0.3em;

      @media (min-width: 600px) {
        padding-bottom: 1em;
      }

      @media (min-width: 768px) {
        width: 50%;
        text-align: center;
        margin: 0 auto;
      }

      span {
        font-size: 0.7rem;

        @media (min-width: 600px) {
          font-size: 0.9rem;
        }
      }
    }

    button {
      height: 60px;
      background: #00bbdc;
      border: none;
      border-radius: 5px;
      color: #ffffff;
      font-size: 1.2em;
      font-weight: 600;
      margin-top: 1em;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      transition: 0.3s ease-in-out;

      @media (min-width: 600px) {
        width: 50%;
        margin: 0 auto;
      }

      &:hover {
        background: #00bbdc9e;
        color: #ffffff;
      }
    }
  }
</style>
