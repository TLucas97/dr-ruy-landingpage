<script>
  const openNewTab = (url) => {
    window.open(url, "_blank");
  };
</script>

<main>
  <img src="./images/results3.png" alt="family" />
  <span class="title"
    >Transforme seu sorriso com a nossa odontologia de qualidade</span
  >
  <div class="description">
    <span>
      "Veja os resultados incríveis nas imagens ao lado. Agende já sua consulta
      e surpreenda-se."
    </span>
  </div>
  <button
    on:click={() =>
      openNewTab("https://api.whatsapp.com/send?phone=5591988109828")}
    >Agende sua consulta</button
  >
</main>

<style lang="scss">
  main {
    background: linear-gradient(
      to right,
      #add8e6,
      #ffffff,
      #ffffff,
      #ffffff,
      #87cefa
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

      @media (min-width: 768px) {
        width: 50%;
        text-align: center;
        margin: 0 auto;
      }

      span {
        font-size: 0.7rem;
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
