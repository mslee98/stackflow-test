/** mono 아이콘: fill을 currentColor로 치환해 color prop으로 색상 제어 */
export function prepareMonoSvg(svg: string): string {
  const withoutSize = svg.replace(/\s(width|height)="[^"]*"/gi, '')
  return withoutSize
    .replace(/<svg/, '<svg width="100%" height="100%"')
    .replace(/fill="(?!none)([^"]*)"/gi, 'fill="currentColor"')
}

/** fill 아이콘: 크기만 정규화 (원본 색상 유지) */
export function prepareFillSvg(svg: string): string {
  const withoutSize = svg.replace(/\s(width|height)="[^"]*"/gi, '')
  return withoutSize.replace(/<svg/, '<svg width="100%" height="100%"')
}

export function getIconPublicUrl(subdir: 'mono' | 'fill', filename: string): string {
  return `/icons/${subdir}/${encodeURIComponent(filename)}`
}
