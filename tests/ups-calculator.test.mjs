import assert from 'node:assert/strict'
import { ampsToKva, calculateUps, kvaToAmps } from '../src/lib/ups.js'

const result = calculateUps([{ quantity: 2, watts: 500 }], 0.8, 25)
assert.equal(result.valid, true)
assert.equal(result.watts, 1000)
assert.equal(result.va, 1250)
assert.equal(result.requiredVa, 1563)
assert.equal(result.recommendedKva, 2)

assert.equal(calculateUps([], 0.9, 25).valid, false)
assert.equal(calculateUps([{ quantity: 1, watts: 100 }], 1.1, 25).valid, false)
assert.equal(Number(kvaToAmps(3, 120, 'mono').toFixed(2)), 25)
assert.equal(Number(kvaToAmps(3, 208, 'trifasico').toFixed(2)), 8.33)
assert.equal(Number(ampsToKva(25, 120, 'mono').toFixed(3)), 3)
assert.equal(Number(ampsToKva(8.33, 208, 'trifasico').toFixed(2)), 3)

console.log('UPS calculator checks passed')
