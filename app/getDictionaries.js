import "server-only";

const dictionaries = {
  productData: () =>
    import("./dictionaries/productData.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  bn: () => import("./dictionaries/bn.json").then((module) => module.default),
};
export const getDictionaries = async (locale) => dictionaries[locale]();
