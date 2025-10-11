export default defineEventHandler(async event => {
  const name = `downloads/${getRouterParam(event, 'slug')?.replaceAll('/', '') || ''}`

  const { file, headers } = await r2(name)

  appendHeaders(event, headers)

  return file
})
