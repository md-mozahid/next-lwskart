import 'server-only'

const dictionaries = {
  productData: () => {
    en: () => import('./en.json').then((module) => module.default)
    bn: () => import('./bn.json').then((module) => module.default)
  },
}
export const getDictionaries = async (locale) => dictionaries[locale]()
