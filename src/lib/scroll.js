export function scrollToTarget(target, options = {}) {
  if (typeof window === 'undefined') return
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: options.immediate ? 'auto' : 'smooth' })
    return
  }
  document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
