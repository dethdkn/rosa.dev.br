export default defineEventHandler(async () => {
  const certificates = await kv<Certificates[]>('certificates')

  certificates.sort((cert1: Certificates, cert2: Certificates) => {
    const [am, ay] = cert1.concluded.split('/')
    const [bm, by] = cert2.concluded.split('/')

    const ak = (Number(ay) || Infinity) * 100 + (Number(am) || 0)
    const bk = (Number(by) || Infinity) * 100 + (Number(bm) || 0)

    if (ak !== bk) return ak - bk
    return cert1.title.localeCompare(cert2.title)
  })

  return certificates
})
