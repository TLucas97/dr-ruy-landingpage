<script>
  import { globalContent } from "../../store.js";

  const procedures = $globalContent.simpleProcedures;
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

    @media (min-width: 768px) {
      width: 50%;
      text-align: center;
      margin: 0 auto;
    }

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
      background: #091d3e;
      border: none;
      border-radius: 4px;
      color: white;
      font-weight: bold;
      margin: 1em 0;
    }
  }
</style>
