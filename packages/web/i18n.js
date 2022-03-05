module.exports = {
  locales: ['ko', 'en'],
  defaultLocale: 'ko',
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`../locale/${lang}/${ns}.json`).then((m) => m.default),
}
