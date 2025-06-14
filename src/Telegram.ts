let tg: typeof window.Telegram.WebApp | undefined

if (typeof window !== 'undefined' && window.Telegram) {
  tg = window.Telegram.WebApp
}

export default tg
