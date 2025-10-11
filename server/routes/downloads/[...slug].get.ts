export default defineEventHandler(async event => {
  const name = `downloads/${getRouterParam(event, 'slug')?.replaceAll('/', '') || ''}`

  const { file, headers } = await r2(name)
    .catch(() => { throw createError({ statusCode: 404, statusMessage: 'File Not Found' }) })

  appendHeaders(event, headers)

  return file
})
