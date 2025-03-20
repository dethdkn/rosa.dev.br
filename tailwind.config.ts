import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: { extend: {
    width: {
      '950px': '950px',
      '19/20': '95%',
    },
    height: {
      100: '25rem',
      120: '30rem',
      160: '40rem',
    },
    spacing: {
      content: 'calc(100vh - 311px)',
    },
    colors: {
      snow: '#CDD5F4',
      pearl: '#EFF1F5',
      cloud: '#DCE0E7',
      milk: '#FAFAFA',
      obsidian: '#4C4F69',
      onyx: '#1E1E2E',
      eclipse: '#1A1B26',
      candy: '#F28AA9',
      bubblegum: '#e7688e',
      nuxt: '#43DD7D',
      vercel: '#000000',
      vercelWhite: '#FDFDFD',
    },
    dropShadow: {
      candy: '0 0 5px #F28AA9',
      nuxt: '0 0 5px #43DD7D',
      nuxtWhite: '0 0 5px #43DD7Daa',
      vercel: '0 0 5px #000000',
      vercelWhite: '0 0 5px #FDFDFDaa',
    },
    fontFamily: {
      delius: '"Delius Unicase"',
    },
    fontSize: {
      mini: '10px',
    },
    borderWidth: {
      3: '3px',
    },
    zIndex: {
      100: '100',
    },
    keyframes: {
      overlayShow: {
        from: { opacity: '0' },
        to: { opacity: '1' },
      },
      contentShow: {
        from: { opacity: '0', transform: 'translate(-50%, -50%) scale(0.01)' },
        to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
      },
      slideUpAndFade: {
        from: { opacity: '0', transform: 'translateY(2px)' },
        to: { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      overlayShow: 'overlayShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      contentShow: 'contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    },
  } },
  darkMode: 'class',
}
