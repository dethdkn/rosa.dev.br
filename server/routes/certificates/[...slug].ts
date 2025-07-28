const { blobReadWriteToken } = useRuntimeConfig()

export default defineEventHandler(async event => {
  const file = await head(`certificates/${getRouterParam(event, 'slug')}`, { token: blobReadWriteToken })
    .catch(() => { throw createError({ statusCode: 404, message: 'Certificate not found' }) })

  return sendProxy(event, file.url)
})
