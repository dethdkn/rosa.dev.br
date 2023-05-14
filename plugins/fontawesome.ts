import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faLanguage, faCircle, faFaceSmileBeam, faBriefcase, faCircleCheck, faCode, faCamera, faCirclePlay, faCloudArrowDown, faUserPlus, faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faYoutube, faBehance, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faHouse, faLanguage, faCircle, faFaceSmileBeam, faBriefcase, faCircleCheck, faCode, faCamera, faCirclePlay, faCloudArrowDown, faUserPlus, faCopyright, faEnvelope, faLinkedin, faGithub, faYoutube, faBehance, faInstagram)

config.autoAddCss = false

export default defineNuxtPlugin(({vueApp}) => {
  vueApp.component('FaIcon', FontAwesomeIcon)
})