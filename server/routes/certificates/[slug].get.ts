export default defineEventHandler(async (event) => {
  const name = `certificates/${getRouterParam(event, 'slug') ?? ''}`

  const { file, headers } = await r2(name).catch(() => {
    throw createError({ statusCode: 404, statusMessage: 'Certificate Not Found' })
  })

  appendHeaders(event, headers)

  return file
})
