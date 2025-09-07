export default defineEventHandler(async () => {
  const certificates = await mongo.collection('certificates').find<Certificates>({}).toArray()

  certificates.sort((a: Certificates, b: Certificates) => {
    const [am, ay] = a.concluded.split('/')
    const [bm, by] = b.concluded.split('/')

    const ak = (Number(ay) || Infinity) * 100 + (Number(am) || 0)
    const bk = (Number(by) || Infinity) * 100 + (Number(bm) || 0)

    if(ak !== bk) return ak - bk
    return a.title.localeCompare(b.title)
  })

  return certificates
})
