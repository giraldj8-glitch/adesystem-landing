import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { SeoContext } from './seo-context'

export function render(url) {
  const collector = { current: null }
  const appHtml = renderToStaticMarkup(
    <SeoContext.Provider value={collector}>
      <StaticRouter location={url}><App /></StaticRouter>
    </SeoContext.Provider>,
  )
  return { appHtml, head: collector.current }
}
