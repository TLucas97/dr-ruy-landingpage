<main>
  <div class="banner-section">
    <span class="title">Dr. Ruy Torres</span>
    <span class="main-title">LENTES DE CONTATO</span>
    <span class="sub-title"
      >PROCEDIMENTO SEGURO EFICAZ E COM RESULTADOS INCRIVEIS!</span
    >
    <button>Saiba mais</button>
  </div>
  <div class="doctor-card">
    <div class="card-header">
      <span class="doc-title">Dr. Ruy Torres</span>
      <small>Cirugião Dentista</small>
    </div>
    <img
      src="https://ruytorres.com.br/wp-content/uploads/2022/11/Sem-Titulo-1.png"
      alt=""
    />
    <span class="description"
      >Ruy Torres é especialista em periodontia pela USP Bauru, pós graduado em
      implantes dentais pela Branemark System Bauru, também se especializou em
      implantontontia pela Universidade Estadual do Ceara, Pós Graduado na Fahl
      em Curitiba em estética dental e em lentes de contato pela Odonto Partners
      em São Paulo. Participou de diversos congressos no Brasil e no Exterior
      como ministrador e assistente.v</span
    >
    <button>Agendar Consulta</button>
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

      .card-header {
        display: flex;
        flex-direction: column;

        .doc-title {
          font-size: 1.2rem;
          font-weight: bold;
        }

        small {
          font-size: 0.7rem;
        }
      }

      img {
        width: 100%;
        height: 300px;
        margin-top: 0.3em;
      }

      .description {
        font-size: 0.6rem;
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
</style>
