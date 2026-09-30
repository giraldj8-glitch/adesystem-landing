import { useState } from 'react'
import { Link } from 'react-router-dom'
import { track } from '../lib/siteEvents'

const WEBHOOK_URL = import.meta.env.VITE_N8N_LEAD_WEBHOOK
const CONSENT_VERSION = '2026-09-v1'

function campaignData() {
  const params = new URLSearchParams(window.location.search)
  return Object.fromEntries(['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].map(key => [key, params.get(key) || '']))
}

export default function LeadForm({ source, results, submitLabel = 'Recibir reporte', onSuccess }) {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  async function submit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    if (form.get('website')) return
    if (!form.get('consent')) {
      setStatus('error')
      setMessage('Debes autorizar el tratamiento de datos para enviar la solicitud.')
      return
    }
    if (!WEBHOOK_URL) {
      setStatus('error')
      setMessage('El formulario está pendiente de conexión. Escríbenos por WhatsApp para validar el cálculo.')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source,
          name: form.get('name'),
          email: form.get('email'),
          company: form.get('company'),
          role: form.get('role'),
          results,
          consent: form.get('consent') === 'on',
          consent_version: CONSENT_VERSION,
          consented_at: new Date().toISOString(),
          referrer: document.referrer,
          ...campaignData(),
        }),
      })
      if (!response.ok) throw new Error('No fue posible registrar el formulario.')
      setStatus('success')
      setMessage('Listo. Recibimos tus datos para preparar la validación técnica.')
      track('lead_submit_success', { source })
      onSuccess?.()
      event.currentTarget.reset()
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'No fue posible enviar el formulario. Intenta de nuevo o usa WhatsApp.')
    }
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      <h2>Validar con un ingeniero</h2>
      <p>Recibe el reporte de cálculo y una validación de autonomía con el modelo y banco de baterías adecuados.</p>
      <div className="lead-form-grid">
        <label>Nombre<input name="name" required autoComplete="name" /></label>
        <label>Correo corporativo<input name="email" type="email" required autoComplete="email" /></label>
        <label>Empresa<input name="company" autoComplete="organization" /></label>
        <label>Cargo<input name="role" autoComplete="organization-title" /></label>
      </div>
      <label className="honeypot" aria-hidden="true">Sitio web<input name="website" tabIndex="-1" autoComplete="off" /></label>
      <label className="consent"><input name="consent" type="checkbox" required /><span>Autorizo a Adesystem Ingeniería S.A.S. a tratar mis datos para responder esta solicitud, enviar el reporte y contactar sobre servicios relacionados. Conozco la <Link to="/politica-tratamiento-datos/">política de tratamiento de datos</Link>.</span></label>
      <button className="btn btn-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando…' : submitLabel}</button>
      {message && <p role="status" className={`form-status ${status}`}>{message}</p>}
    </form>
  )
}
