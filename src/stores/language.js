import { store as Store } from 'react-easy-state'

const language = Store({
  default: "he-IL",
  current: window.localStorage.getItem("language"),
  allowed_languages: [
    "he-IL",
    "en-US"
  ],
  SetCurrent(new_language, cb) {
    if (!new_language) {
      new_language = language.current || navigator.language
    }
    if (!language.allowed_languages.some(item => item == new_language)) {
      new_language = language.default
    }
    window.localStorage.setItem("language", new_language)
    language.LoadLanguage(new_language, cb)
  },
  async LoadLanguage(new_language, cb) {
    if (new_language=="he-IL") {
      language.t = await import('/languages/he-IL.json')
      // await import('framework7/css/framework7.rtl.min.css')
      await import('framework7/css/framework7.bundle.rtl.css')
    }
    if (new_language=="en-US") {
      language.t = await import('/languages/en-US.json')
      await import('framework7/css/framework7.bundle.css')
      // await import('framework7/css/framework7.min.css')
    }
    await import('/colors.css')
    document.getElementsByTagName("html")[0].dir = language.t.dir
    return typeof cb !== "undefined" ? cb() : location.reload()
  }
})

export default language