import { useId, useRef, useState } from 'react'

export default function DetailImage({ src, alt }) {
  const dialog = useRef(null)
  const titleId = useId()
  const [zoom, setZoom] = useState(false)
  return (
    <>
      <button type="button" className="detail-image" aria-label={`Ampliar: ${alt}`} onClick={() => dialog.current.showModal()}>
        <img src={src} alt={alt} width="1672" height="941" loading="lazy" />
        <span>Explorar detalle ↗</span>
      </button>
      <dialog ref={dialog} className="image-dialog" aria-labelledby={titleId} onClose={() => setZoom(false)} onClick={event => { if (event.target === event.currentTarget) dialog.current.close() }}>
        <div className="image-dialog-bar">
          <p id={titleId}>{alt}</p>
          <button type="button" aria-pressed={zoom} onClick={() => setZoom(value => !value)}>{zoom ? 'Vista completa' : 'Zoom +'} </button>
          <button type="button" onClick={() => dialog.current.close()}>Cerrar ×</button>
        </div>
        <div className="image-dialog-scroll" tabIndex="0" aria-label="Imagen ampliada; use las flechas para desplazarse">
          <img className={zoom ? 'is-zoomed' : ''} src={src} alt={alt} width="1672" height="941" />
        </div>
        <p className="image-dialog-caption">Render conceptual · ADE System · El diseño final se define para su proyecto.</p>
      </dialog>
    </>
  )
}
