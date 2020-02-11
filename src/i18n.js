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
          birth_year: 'Birth year',
          // created: 'created',
          // edited: 'edited',
          eye_color: 'Eye color',
          set_lang: 'Set lang',
          // gender: 'gender',
          // male: 'male',
        },
      },
      ru: {
        translation: {
          birth_year: 'год рождения',
          created: 'созданно',
          edited: 'изменено',
          eye_color: 'цвет глаз',
          set_lang: 'выбрать язык',
          gender: 'пол',
          male: 'мужской',
          famale: 'женский',
          name: 'Имя',
          blue: 'Голубой',
          yellow: 'Желтый',
          'Luke Skywalker': 'Люк Скайвокер',
          Entities: 'Сущности',
          Graphs: 'Графики',
          Root: 'Главная страница',
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
