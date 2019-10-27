import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          birth_year: 'birth_year',
          created: 'created',
          edited: 'edited',
          eye_color: 'eye_color',
          set_lang: 'set lang',
        },
      },
      ru: {
        translation: {
          birth_year: 'год рождения',
          created: 'созданно',
          edited: 'изменено',
          eye_color: 'цвет глаз',
          set_lang: 'выбрать язык',
        },
      },
      debug: false,
      lng: 'en',
      fallbackLng: false, // use en if detected lng is not available
      keySeparator: false, // we do not use keys in form messages.welcome
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
      ns: ['translations'],
      defaultNS: 'translations',
    },
  })

export default i18n
