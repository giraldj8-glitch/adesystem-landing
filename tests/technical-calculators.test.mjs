import assert from 'node:assert/strict'
import { calculateCableSection, calculatePoe } from '../src/lib/technicalCalculators.js'

const poe = calculatePoe([{ quantity: 4, watts: 20 }, { quantity: 2, watts: 12 }], 150, 20)
assert.deepEqual(poe, { valid: true, ports: 6, watts: 104, designWatts: 124.8, remainingWatts: 25.2, fits: true })
assert.equal(calculatePoe([], 150, 20).valid, false)
assert.equal(calculatePoe([{ quantity: 2, watts: 90 }], 150, 0).fits, false)

const cable = calculateCableSection({ voltage: 120, current: 25, length: 100, dropPercent: 3, material: 'copper', phase: 'mono', temperature: 50 })
assert.equal(cable.valid, true)
assert.equal(cable.theoreticalSection, 26.08)
assert.equal(cable.recommendedSection, 35)
assert.equal(cable.actualDropPercent, 2.24)
assert.equal(calculateCableSection({ voltage: 0, current: 10, length: 20, dropPercent: 3 }).valid, false)

console.log('Technical calculator checks passed')
