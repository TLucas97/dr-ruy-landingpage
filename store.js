import { writable } from "svelte/store";

export const globalContent = writable({
  simpleProcedures: [
    {
      title: "Clareamento Dental",
      text: "O clareamento dental é uma microlimpeza da estrututura do dente. Por causa de pigmentos externos, com o passar do tempo, o dente fica com uma cor mais amarelada.",
      to: "teeth-clear",
      id: "clear-start",
    },
    {
      title: "Lente de Contato Dental",
      text: "A odontologia estética evoluiu muito e, hoje, podemos afirmar que as lentes de contato dentais são o que há de mais sofisticado na estética dental.",
      to: "teeth-contact",
      id: "contact-start",
    },
    {
      title: "Próteses total e parcial",
      text: "Um dos procedimentos plásticos mais procurados atualmente por quem deseja um rosto mais fino e harmônico, a bichectomia inicialmente possuía fins exclusivamente odontológicos",
      to: "proteses",
      id: "protese-start",
    },
  ],
});
