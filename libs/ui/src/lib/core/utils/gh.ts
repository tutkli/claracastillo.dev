type LanguageColor = {
  [key: string]: string;
};

export const languageColor: LanguageColor = {
  Svelte: 'rgb(255, 62, 0)',
  TypeScript: 'rgb(49, 120, 198)',
  Python: 'rgb(53, 114, 165)',
  CSS: 'rgb(86, 61, 124)',
};

export function getLanguageColor(lang: string) {
  // check if language is in languageColor keys, if so return the value of that key
  return Object.keys(languageColor).includes(lang)
    ? languageColor[lang]
    : '#ffffff';
}
