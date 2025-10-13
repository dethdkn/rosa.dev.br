export default defineEventHandler(async () => {
  const errors: unknown[] = []

  const certificates = await kv<Certificates[]>('certificates').catch(error => {
    errors.push(error)
    return []
  })

  return { certificates, errors, kv: globalThis.KV, kvEnv: globalThis.__env__?.KV || null }
})
