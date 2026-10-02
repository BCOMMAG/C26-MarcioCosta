import { OFFICE_INFO } from "./data";

export function getLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: OFFICE_INFO.name,
    description:
      "Defesa criminal técnica, combativa e estratégica em Curitiba e todo o Paraná. Atuação em Audiências de Custódia, Tribunal do Júri, Execução Penal, Habeas Corpus e Inquéritos Policiais.",
    url: "https://marciocosta.pages.dev",
    telephone: "+554195335191",
    priceRange: "$$$",
    image: "https://marciocosta.pages.dev/og-image_optimized_300.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Francisco Derosso, 2065 - Sl 12 - Xaxim",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      postalCode: "81720-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.508535,
      longitude: -49.271185,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      OFFICE_INFO.instagramUrl,
      OFFICE_INFO.linkedinUrl,
    ],
  };
}