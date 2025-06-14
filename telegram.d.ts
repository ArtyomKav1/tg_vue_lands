
export {}

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string
        initDataUnsafe: any
        close: () => void
        expand: () => void
        ready: () => void
        sendData: (data: string) => void
        themeParams?: Record<string, string>
        version?: string
        platform?: string
        isExpanded?: boolean
        isClosingConfirmationEnabled?: boolean
      }
    }
  }
}
