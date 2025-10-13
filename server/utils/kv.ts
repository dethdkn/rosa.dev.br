const KV = globalThis.KV || globalThis.__env__?.KV

export default async function<T>(key: string): Promise<T>{
  if(!KV) throw new Error('KV not found')

  const value = await KV.get(key)

  if(!value) throw new Error('Key not found')

  return destr<T>(value)
}
