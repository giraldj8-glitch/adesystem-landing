import { BLOG_POSTS } from '../src/data/blogPosts.js'

const errors = []
const warnings = []
const seen = { slug: new Set(), title: new Set(), description: new Set() }
const words = text => (text.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9%√]+/g) || []).length
const sentences = text => String(text).split(/(?<=[.!?])\s+/).filter(Boolean)

for (const post of BLOG_POSTS) {
  if (!['draft', 'published'].includes(post.status)) errors.push(`${post.slug}: estado editorial inválido`)
  for (const key of Object.keys(seen)) {
    const value = key === 'title' ? post.metaTitle : key === 'description' ? post.metaDescription : post.slug
    if (seen[key].has(value)) errors.push(`${post.slug}: ${key} duplicado`)
    seen[key].add(value)
  }

  if (post.metaTitle.length < 40 || post.metaTitle.length > 65) errors.push(`${post.slug}: meta title de ${post.metaTitle.length} caracteres`)
  if (post.metaDescription.length < 120 || post.metaDescription.length > 165) errors.push(`${post.slug}: meta description de ${post.metaDescription.length} caracteres`)
  if (!post.answer || post.sections.length < 4) errors.push(`${post.slug}: falta respuesta directa o desarrollo suficiente`)

  const visible = [post.excerpt, post.answer]
  for (const section of post.sections) visible.push(...section.ps, ...(section.bullets || []))
  for (const faq of post.faqs || []) visible.push(faq.q, faq.a)

  for (const text of visible) {
    for (const sentence of sentences(text)) {
      if (words(sentence) > 28) warnings.push(`${post.slug}: revise frase de ${words(sentence)} palabras`)
    }
  }
}

if (errors.length) {
  console.error(`Errores editoriales (${errors.length}):\n- ${errors.join('\n- ')}`)
  process.exit(1)
}

if (warnings.length) console.warn(`Avisos editoriales (${warnings.length}):\n- ${warnings.join('\n- ')}`)

console.log(`Auditoría editorial superada: ${BLOG_POSTS.length} artículos (${BLOG_POSTS.filter(post => post.status === 'published').length} publicados)`)
