export default defineEventHandler(async event => {
  const fileName = getRouterParam(event, 'slug') || ''

  const { buffer, headers } = await r2('downloads', fileName)
    .catch(() => { throw createError({ statusCode: 404, statusMessage: 'File Not Found' }) })

  appendHeaders(event, headers)

  return buffer
})
