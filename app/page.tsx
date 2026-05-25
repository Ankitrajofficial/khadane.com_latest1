import { redirect } from 'next/navigation'

/**
 * Root-route fallback.
 *
 * Public traffic is rewritten to /khadane/* by middleware.ts. If a request
 * reaches the root page directly, keep it on KHADANE.
 */
export default async function RootIndex() {
  redirect('/khadane')
}

export const dynamic = 'force-dynamic'
