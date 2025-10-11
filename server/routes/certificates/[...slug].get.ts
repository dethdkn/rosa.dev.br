export default defineEventHandler(async event => {
  const name = `certificates/${getRouterParam(event, 'slug')}`

  const { buffer, headers } = await r2(name)

  appendHeaders(event, headers)

  return buffer
})
