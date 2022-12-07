<script>
  const procedures = [
    {
      title: "Clareamento Dental",
      text: "O clareamento dental é uma microlimpeza da estrututura do dente. Por causa de pigmentos externos, com o passar do tempo, o dente fica com uma cor mais amarelada.",
      to: "/",
    },
    {
      title: "Lente de Contato Dental",
      text: "A odontologia estética evoluiu muito e, hoje, podemos afirmar que as lentes de contato dentais são o que há de mais sofisticado na estética dental.",
      to: "/",
    },
    {
      title: "Próteses total e parcial",
      text: "Um dos procedimentos plásticos mais procurados atualmente por quem deseja um rosto mais fino e harmônico, a bichectomia inicialmente possuía fins exclusivamente odontológicos",
      to: "/",
    },
  ];
</script>

<main>
  {#each procedures as procedure}
    <div class="card">
      <span class="title">{procedure.title}</span>
      <span class="description">{procedure.text}</span>
      <div class="btn-area">
        <button>Saiba mais</button>
      </div>
    </div>
  {/each}
  <button class="last-btn">CONHEÇA OS TRATAMENTOS</button>
</main>

<style lang="scss">
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .card {
      display: flex;
      flex-direction: column;
      width: 90%;
      border-bottom: 1px solid #3b84ab;
      text-align: center;
      padding: 1em;

      span {
        font-size: 0.8rem;
      }

      .title {
        margin-bottom: 0.7em;
        font-weight: bold;
        color: #3b84ab;
      }

      .description {
        font-size: 0.7rem;
      }

      .btn-area {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          width: 150px;
          height: 40px;
          background: #ffffff;
          border: 1px solid #3b84ab;
          border-radius: 4px;
          color: #3b84ab;
          font-weight: bold;
          margin-top: 1em;
        }
      }
    }

    .last-btn {
        width: 80%;
        height: 40px;
        background: #091D3E;
        border: none;
        border-radius: 4px;
        color: white;
        font-weight: bold;
        margin: 1em 0;
    }
  }
</style>
