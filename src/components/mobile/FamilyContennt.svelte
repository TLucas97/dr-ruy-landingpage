<main>
  <img src="./images/family-banner.png" alt="family" />
  <span class="title">Tratamentos que oferecemos para você e sua família</span>
  <div class="description">
    <span>Conheça todas as especialidades que CEIO oferece.</span>
    <span>
      Nossa equipe conta com profissionais altamente qualificados e dispomos de
      ótima estrutura. Garantindo segurança e conforto para o seu tratamento.
    </span>
  </div>
</main>

<style lang="scss">
  main {
    background: linear-gradient(
      to right,
      #091d3e,
      #1d3768,
      #1d3768,
      #1d3768,
      #091d3e
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
      color: #ffff;

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
  }
</style>
