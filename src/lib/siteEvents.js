const GTM_ID = import.meta.env.VITE_GTM_ID

export function track(event, data = {}) {
  if (typeof window === 'undefined') return
  if (localStorage.getItem('adesystem_analytics_consent') !== 'accepted') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...data })
}

export function loadAnalytics() {
  if (!GTM_ID || typeof document === 'undefined' || document.querySelector('[data-adesystem-gtm]')) return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })
  const script = document.createElement('script')
  script.async = true
  script.dataset.adesystemGtm = 'true'
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`
  document.head.appendChild(script)
}
