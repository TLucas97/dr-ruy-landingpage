<script>
  import { useNavigate } from "svelte-navigator";

  let navigate = useNavigate();
</script>

<main id="mobile-doc-content">
  <div class="banner-section">
    <span class="title">Dr. Ruy Torres</span>
    <span class="main-title">LENTES DE CONTATO</span>
    <span class="sub-title"
      >PROCEDIMENTO SEGURO EFICAZ E COM RESULTADOS INCRIVEIS!</span
    >
    <button on:click={() => navigate("/teeth-contact")}>Saiba mais</button>
  </div>
  <div class="doctor-card">
    <div class="card-header">
      <span class="doc-title">Dr. Ruy Torres</span>
      <small>Cirugião Dentista</small>
    </div>
    <img src="./images/doc-banner.png" alt="" />
    <span class="description"
      >Ruy Torres é especialista em periodontia pela USP Bauru, pós graduado em
      implantes dentais pela Branemark System Bauru, também se especializou em
      implantontontia pela Universidade Estadual do Ceara, Pós Graduado na Fahl
      em Curitiba em estética dental e em lentes de contato pela Odonto Partners
      em São Paulo. Participou de diversos congressos no Brasil e no Exterior
      como ministrador e assistente.v</span
    >
    <div class="btn">
      <button>Agendar Consulta</button>
    </div>
  </div>
</main>

<style lang="scss">
  main {
    width: 100%;
    background: #e1fdff;
    padding-bottom: 1em;

    .banner-section {
      width: 100%;
      height: 380px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: black;

      .title {
        font-weight: bold;
      }

      .main-title {
        font-size: 1.2rem;
        font-weight: bold;
        margin-top: 1em;
        color: #2bc7e2;
        text-decoration: underline;
      }

      .sub-title {
        font-size: 0.9rem;
        text-align: center;
        margin-top: 0.2em;
      }

      button {
        width: 150px;
        height: 40px;
        background: #2bc7e2;
        border: none;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        margin-top: 1em;
      }
    }

    .doctor-card {
      width: 85%;
      background: #ffff;
      margin: 0 auto;
      border-radius: 10px;
      padding: 0.5em;
      display: flex;
      flex-direction: column;

      @media (min-width: 700px) {
        width: 70%;
        margin: 0 auto;
      }

      @media (min-width: 830px) {
        width: 50%;
        margin: 0 auto;
      }

      .card-header {
        display: flex;
        flex-direction: column;

        .doc-title {
          font-size: 1.2rem;
          font-weight: bold;

          @media (min-width: 440px) {
            text-align: center;
          }
        }

        small {
          font-size: 0.7rem;

          @media (min-width: 440px) {
            text-align: center;
          }
        }
      }

      img {
        width: 100%;
        height: 300px;
        margin-top: 0.3em;

        @media (min-width: 440px) {
          width: 80%;
          margin: 0 auto;
          padding-top: 1em;
        }
        @media (min-width: 600px) {
          width: 60%;
          margin: 0 auto;
        }
        @media (min-width: 830px) {
          width: 60%;
          margin: 0 auto;
        }
        @media (min-width: 960px) {
          width: 55%;
          margin: 0 auto;
        }
      }

      .description {
        font-size: 0.6rem;
        margin-top: 1.2em;

        @media (min-width: 600px) {
          width: 70%;
          text-align: justify;
          margin: 0 auto;
          padding-top: 1em;
        }
      }

      .btn {
        @media (min-width: 400px) {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 1em;
        }

        button {
          width: 150px;
          height: 50px;
          background: #2bc7e2;
          border: none;
          border-radius: 5px;
          color: white;
          font-weight: bold;
          margin-top: 1em;
        }
      }
    }
  }
</style>
