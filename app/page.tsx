import { redirect } from 'next/navigation'

/**
 * Root-route fallback.
 *
 * Public traffic is redirected to /khadane through next.config.js. If a
 * request reaches the root page directly, keep it on KHADANE.
 */
export default async function RootIndex() {
  redirect('/khadane')
}

export const dynamic = 'force-dynamic'
