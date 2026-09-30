export const UPS_PRESETS = [
  { id: 'pc', label: 'PC de escritorio', watts: 250 },
  { id: 'monitor', label: 'Monitor', watts: 35 },
  { id: 'servidor', label: 'Servidor', watts: 450 },
  { id: 'switch-poe', label: 'Switch PoE', watts: 180 },
  { id: 'router', label: 'Router', watts: 20 },
  { id: 'nvr', label: 'NVR', watts: 80 },
  { id: 'camara-ip', label: 'Cámara IP', watts: 12 },
  { id: 'pos', label: 'POS', watts: 70 },
]

export const STANDARD_UPS_KVA = [0.6, 0.75, 1, 1.5, 2, 3, 5, 6, 10, 15, 20, 30, 40, 60, 80, 100]

const round = (value, decimals = 0) => Number(value.toFixed(decimals))

export function calculateUps(items, powerFactor = 0.9, marginPercent = 25) {
  const factor = Number(powerFactor)
  const margin = Number(marginPercent)
  const watts = items.reduce((sum, item) => {
    const quantity = Number(item.quantity)
    const itemWatts = Number(item.watts)
    return Number.isFinite(quantity) && Number.isFinite(itemWatts) && quantity > 0 && itemWatts > 0
      ? sum + quantity * itemWatts
      : sum
  }, 0)

  if (!watts || factor < 0.5 || factor > 1 || margin < 0 || margin > 100) {
    return { valid: false, watts: round(watts), va: 0, requiredVa: 0, recommendedKva: null }
  }

  const va = watts / factor
  const requiredVa = va * (1 + margin / 100)
  const recommendedKva = STANDARD_UPS_KVA.find(size => size * 1000 >= requiredVa) ?? null

  return {
    valid: true,
    watts: round(watts),
    va: round(va),
    kva: round(va / 1000, 2),
    requiredVa: round(requiredVa),
    requiredKva: round(requiredVa / 1000, 2),
    recommendedKva,
  }
}

export function kvaToAmps(kva, voltage, phase = 'mono') {
  const value = Number(kva)
  const volts = Number(voltage)
  if (!(value > 0) || !(volts > 0)) return null
  return phase === 'trifasico'
    ? value * 1000 / (Math.sqrt(3) * volts)
    : value * 1000 / volts
}

export function ampsToKva(amps, voltage, phase = 'mono') {
  const value = Number(amps)
  const volts = Number(voltage)
  if (!(value > 0) || !(volts > 0)) return null
  return phase === 'trifasico'
    ? Math.sqrt(3) * volts * value / 1000
    : volts * value / 1000
}

export function formatNumber(value, decimals = 0) {
  return new Intl.NumberFormat('es-CO', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}
