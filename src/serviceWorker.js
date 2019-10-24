 export default function serviceWorker () { 
    if('serviceWorker' in navigator) { 
      window.addEventListener('load', async function() {
         try{
            const registration = await navigator.serviceWorker.register('./sw.js')
            console.log(registration)
           } catch (e) {
               console.error(e)
           }
         })
    } else {
        // Текущий браузер не поддерживает service worker-ы.
        console.log('Текущий браузер не поддерживает service worker-ы');
      }
}