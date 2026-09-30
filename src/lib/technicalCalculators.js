export const POE_PRESETS = [
  { id: 'phone', label: 'Teléfono IP', watts: 7 },
  { id: 'camera', label: 'Cámara IP fija', watts: 12 },
  { id: 'ptz', label: 'Cámara PTZ', watts: 30 },
  { id: 'ap-wifi6', label: 'Access point Wi-Fi 6', watts: 20 },
  { id: 'ap-high', label: 'Access point alta potencia', watts: 35 },
  { id: 'access', label: 'Control de acceso', watts: 15 },
]

export const CABLE_SECTIONS_MM2 = [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240]

const round = (value, decimals = 2) => Number(value.toFixed(decimals))

export function calculatePoe(items, switchBudget, marginPercent = 20) {
  const budget = Number(switchBudget)
  const margin = Number(marginPercent)
  const ports = items.reduce((sum, item) => sum + Math.max(0, Number(item.quantity) || 0), 0)
  const watts = items.reduce((sum, item) => {
    const quantity = Number(item.quantity)
    const itemWatts = Number(item.watts)
    return quantity > 0 && itemWatts > 0 ? sum + quantity * itemWatts : sum
  }, 0)

  if (!(budget > 0) || !(watts > 0) || margin < 0 || margin > 100) return { valid: false }
  const designWatts = watts * (1 + margin / 100)
  return {
    valid: true,
    ports,
    watts: round(watts, 1),
    designWatts: round(designWatts, 1),
    remainingWatts: round(budget - designWatts, 1),
    fits: designWatts <= budget,
  }
}

export function calculateCableSection({ voltage, current, length, dropPercent, material = 'copper', phase = 'mono', temperature = 50 }) {
  const volts = Number(voltage)
  const amps = Number(current)
  const meters = Number(length)
  const drop = Number(dropPercent)
  const temp = Number(temperature)
  if (!(volts > 0) || !(amps > 0) || !(meters > 0) || !(drop > 0 && drop <= 10) || temp < 20 || temp > 120) return { valid: false }

  const rho20 = material === 'aluminum' ? 0.0282 : 0.0168
  const alpha = material === 'aluminum' ? 0.00403 : 0.00393
  const rho = rho20 * (1 + alpha * (temp - 20))
  const factor = phase === 'trifasico' ? Math.sqrt(3) : 2
  const allowedDropVolts = volts * drop / 100
  const theoreticalSection = factor * rho * meters * amps / allowedDropVolts
  const recommendedSection = CABLE_SECTIONS_MM2.find(section => section >= theoreticalSection) ?? null
  const actualDropVolts = recommendedSection ? factor * rho * meters * amps / recommendedSection : null

  return {
    valid: true,
    theoreticalSection: round(theoreticalSection),
    recommendedSection,
    allowedDropVolts: round(allowedDropVolts),
    actualDropVolts: actualDropVolts === null ? null : round(actualDropVolts),
    actualDropPercent: actualDropVolts === null ? null : round(actualDropVolts / volts * 100),
  }
}
