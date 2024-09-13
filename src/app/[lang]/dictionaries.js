import 'server-only'

const dictionaries = {
    zh_CN: () => import('./dictionaries/zh_CN.json').then(module => module.default),
    en_US: () => import('./dictionaries/en_US.json').then(module => module.default),
    ja_JP: () => import('./dictionaries/ja_JP.json').then(module => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()