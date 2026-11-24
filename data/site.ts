export const site = {
    name: "Artyom Balaban",
    brand: "BalabanDev",
    handle: "balabandev",
    links: {
        github: "https://github.com/balabandev",
        telegram: "https://t.me/bxlxbxn",
        linkedin: "https://www.linkedin.com/in/your-handle",
        email: "artyombalaban2005@gmail.com",
    },
} as const;

const cvLocales = ["en"];

export function cvHref(locale: string) {
  const l = cvLocales.includes(locale) ? locale : "en";
  return `/cv/Artyom_Balaban_CV_${l.toUpperCase()}.pdf`;
}