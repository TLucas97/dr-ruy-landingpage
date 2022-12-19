import { writable } from "svelte/store";

export const globalContent = writable({
  open: false,
  currentModalContent: "",
  simpleProcedures: [
    {
      title: "Clareamento Dental",
      text: "O clareamento dental é uma microlimpeza da estrututura do dente. Por causa de pigmentos externos, com o passar do tempo, o dente fica com uma cor mais amarelada.",
      to: "clareamento-dental",
      id: "clear-start",
      currentContent: "clear",
    },
    {
      title: "Lente de Contato Dental",
      text: "A odontologia estética evoluiu muito e, hoje, podemos afirmar que as lentes de contato dentais são o que há de mais sofisticado na estética dental.",
      to: "lente-de-contato",
      id: "contact-start",
      currentContent: "contact",
    },
    {
      title: "Próteses total e parcial",
      text: "Um dos procedimentos plásticos mais procurados atualmente por quem deseja um rosto mais fino e harmônico, a bichectomia inicialmente possuía fins exclusivamente odontológicos",
      to: "proteses",
      id: "protese-start",
      currentContent: "protesys",
    },
  ],
  otherProcedures: [
    {
      title: "Endodontia",
      to: "edodontia",
      id: "edodontia-start",
    },
    {
      title: "Periodontia",
      to: "periodontia",
      id: "periodontia-start",
    },
    {
      title: "Recobrimento radicular",
      to: "recobrimento-radicular",
      id: "recobrimento-radicular-start",
    },
    {
      title: "Carga imediata",
      to: "protese-carga-imediata",
      id: "protese-charge-start",
    },
    {
      title: "Reabilitacao Oral",
      to: "reabilitacao-oral",
      id: "rehab-start",
    },
  ],
});
