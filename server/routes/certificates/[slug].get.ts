export default defineEventHandler(async event => {
  const certName = getRouterParam(event, 'slug') || ''

  const { buffer, headers } = await r2('certificates', certName)
    .catch(() => { throw createError({ statusCode: 404, statusMessage: 'Certificate Not Found' }) })

  appendHeaders(event, headers)

  return buffer
})
