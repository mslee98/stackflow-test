/**
 * mono/ · fill/ SVG를 public/으로 복사하고 manifest TS 생성.
 * 번들에 SVG 본문을 넣지 않아 600+ 아이콘도 가볍게 유지합니다.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const iconsDir = path.join(root, 'src/design-system/icons')
const publicIconsDir = path.join(root, 'public/icons')
const outFile = path.join(iconsDir, 'registry.generated.ts')

function pathToIconName(filename) {
  const withoutExt = filename.replace(/\.svg$/i, '')
  const commaIndex = withoutExt.indexOf(',')
  return (commaIndex === -1 ? withoutExt : withoutExt.slice(0, commaIndex)).trim()
}

function buildManifest(subdir) {
  const srcDir = path.join(iconsDir, subdir)
  const destDir = path.join(publicIconsDir, subdir)
  const manifest = {}

  if (!fs.existsSync(srcDir)) {
    if (fs.existsSync(destDir)) fs.rmSync(destDir, { recursive: true, force: true })
    return manifest
  }

  fs.mkdirSync(destDir, { recursive: true })
  fs.rmSync(destDir, { recursive: true, force: true })
  fs.mkdirSync(destDir, { recursive: true })

  for (const filename of fs.readdirSync(srcDir)) {
    if (!filename.endsWith('.svg')) continue
    const name = pathToIconName(filename)
    manifest[name] = filename
    fs.copyFileSync(path.join(srcDir, filename), path.join(destDir, filename))
  }

  return manifest
}

const monoIconManifest = buildManifest('mono')
const fillIconManifest = buildManifest('fill')

const monoCount = Object.keys(monoIconManifest).length
const fillCount = Object.keys(fillIconManifest).length

const content = `/**
 * AUTO-GENERATED — scripts/generate-icon-registry.mjs
 * mono: ${monoCount}개, fill: ${fillCount}개
 * SVG 본문은 public/icons/ 에 정적 호스팅. 수정하지 마세요.
 */
export const monoIconManifest = ${JSON.stringify(monoIconManifest, null, 2)} as const

export const fillIconManifest = ${JSON.stringify(fillIconManifest, null, 2)} as const
`

fs.writeFileSync(outFile, content, 'utf-8')
console.log(`[icons] registry.generated.ts + public/icons/ — mono: ${monoCount}, fill: ${fillCount}`)
