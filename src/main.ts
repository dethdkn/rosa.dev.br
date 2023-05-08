localStorage.getItem("theme") === 'light' ? document.getElementsByTagName( 'html' )[0].classList.remove('dark') : document.getElementsByTagName( 'html' )[0].classList.add('dark')
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.sass'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faLanguage, faCircle, faFaceSmileBeam, faBriefcase, faCircleCheck, faCode, faCamera, faCirclePlay, faCloudArrowDown, faUserPlus, faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faYoutube, faBehance, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faHouse, faLanguage, faCircle, faFaceSmileBeam, faBriefcase, faCircleCheck, faCode, faCamera, faCirclePlay, faCloudArrowDown, faUserPlus, faCopyright, faEnvelope, faLinkedin, faGithub, faYoutube, faBehance, faInstagram)
import router from './routes'
import App from './App.vue'
import ptBR from './locales/pt-BR.json'
import enUS from './locales/en-US.json'
let selectedLanguage = localStorage.getItem('language') || navigator.language
if(selectedLanguage !== 'pt-BR' && selectedLanguage !== 'en-US'){selectedLanguage = 'en-US'}
const i18n = createI18n({
   legacy: false,
   warnHtmlMessage: false,
   locale: selectedLanguage,
   fallbackLocale: 'en-US',
   messages: {
      'pt-BR': ptBR,
      'en-US': enUS
   }
})
dom.watch()
createApp(App)
.use(router)
.use(i18n)
.component('FaIcon', FontAwesomeIcon)
.mount('#app')