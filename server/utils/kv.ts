const KV = globalThis.KV || globalThis.__env__?.KV

export default async function kv<Type>(key: string): Promise<Type> {
  if (!KV) throw new Error('KV not found')

  const value = await KV.get(key)

  if (!value) throw new Error('Key not found')

  return destr<Type>(value)
}
