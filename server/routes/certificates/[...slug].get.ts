export default defineEventHandler(async event => {
  const name = `certificates:${getRouterParam(event, 'slug')?.replaceAll('/', '') || ''}`

  const { buffer, headers } = await r2(name)
    .catch(() => { throw createError({ statusCode: 404, statusMessage: 'Certificate Not Found' }) })

  appendHeaders(event, headers)

  return buffer
})
