import Image from './opengraph-image'
import { ENTITIES, FOUNDING } from '@/lib/facts'

export const runtime = 'edge'
export const alt = `${ENTITIES.group.name} — A working group, since ${FOUNDING.groupYear}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default Image
