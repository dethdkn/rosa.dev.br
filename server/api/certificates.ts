export default defineEventHandler(async () => {
  const certificates = await mongo.collection('certificates').find<Certificates>({}).toArray()

  return certificates
})
