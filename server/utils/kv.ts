const KV = globalThis.KV || globalThis.__env__?.KV

export default async function<T>(key: string): Promise<T>{
  if(!KV) throw new Error('KV not found')

  return (await KV.get<T>(key)) as T
}
