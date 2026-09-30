import { useState } from 'react'
import { whatsapp } from '../data/site'
import { track } from '../lib/siteEvents'

const symptoms = [
  'Perdió autonomía',
  'Presenta alarmas',
  'Se apaga durante el corte',
  'Necesita mantenimiento preventivo',
  'No sé qué necesita',
]

export default function UpsDiagnostic() {
  const [symptom, setSymptom] = useState(symptoms[0])

  const submit = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = `Hola, quiero revisar una UPS. Síntoma: ${symptom}. Marca/modelo: ${data.get('model') || 'por confirmar'}. Capacidad: ${data.get('capacity') || 'por confirmar'}. Ciudad: ${data.get('city') || 'por confirmar'}.`
    track('diagnostic_start', { symptom })
    window.open(whatsapp(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="ups-diagnostic" aria-labelledby="diagnostic-title">
      <div className="content-shell">
        <div><h2 id="diagnostic-title">¿Qué está pasando con tu UPS?</h2><p>Selecciona la señal principal. Con esos datos iniciamos una conversación técnica por WhatsApp.</p></div>
        <form onSubmit={submit}>
          <fieldset><legend>Señal principal</legend>{symptoms.map(item => <label key={item}><input type="radio" name="symptom" value={item} checked={symptom === item} onChange={() => setSymptom(item)} />{item}</label>)}</fieldset>
          <div className="diagnostic-fields">
            <label>Marca o modelo<input name="model" placeholder="Ej. APC Smart-UPS" /></label>
            <label>Capacidad<input name="capacity" placeholder="Ej. 3 kVA" /></label>
            <label>Ciudad<input name="city" placeholder="Ej. Bogotá" /></label>
          </div>
          <button className="btn btn-primary" type="submit">Continuar por WhatsApp →</button>
        </form>
      </div>
    </section>
  )
}
