/**
 * mono/ · fill/ SVG 파일명에서 쉼표 alias 제거.
 * icon-foo-mono,alias1,alias2.svg → icon-foo-mono.svg
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const iconsDir = path.join(root, 'src/design-system/icons')

function toNormalizedFilename(filename) {
  if (!filename.endsWith('.svg')) return null
  const withoutExt = filename.slice(0, -4)
  const commaIndex = withoutExt.indexOf(',')
  if (commaIndex === -1) return null
  return `${withoutExt.slice(0, commaIndex).trim()}.svg`
}

function normalizeDir(subdir) {
  const dir = path.join(iconsDir, subdir)
  if (!fs.existsSync(dir)) return { renamed: 0, skipped: 0 }

  let renamed = 0
  let skipped = 0

  for (const filename of fs.readdirSync(dir)) {
    const normalized = toNormalizedFilename(filename)
    if (!normalized) continue

    const from = path.join(dir, filename)
    const to = path.join(dir, normalized)

    if (fs.existsSync(to)) {
      console.warn(`[icons:normalize] skip collision: ${subdir}/${filename}`)
      skipped++
      continue
    }

    fs.renameSync(from, to)
    renamed++
  }

  return { renamed, skipped }
}

const mono = normalizeDir('mono')
const fill = normalizeDir('fill')

console.log(
  `[icons:normalize] mono: ${mono.renamed} renamed (${mono.skipped} skipped), fill: ${fill.renamed} renamed (${fill.skipped} skipped)`,
)
