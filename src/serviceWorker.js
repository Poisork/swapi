/* eslint-disable no-console */
export default async function serviceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('./sw.js')
      console.log(registration)
    } catch (e) {
      console.error(e)
    }
  } else {
    console.log('Текущий браузер не поддерживает service worker-ы')
  }
}
