const KV = createStorage({ driver: KVDriver({ binding: 'KV' }) })

export default async function<T>(key: string): Promise<T>{
  return (await KV.getItem<T>(key)) as T
}
