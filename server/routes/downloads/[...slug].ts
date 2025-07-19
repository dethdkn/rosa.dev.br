const { blobReadWriteToken } = useRuntimeConfig()

export default defineEventHandler(async event => {
  const file = await head(`downloads/${getRouterParam(event, 'slug')}`, { token: blobReadWriteToken })
    .catch(() => { throw createError({ statusCode: 404, message: 'File not found' }) })

  return sendRedirect(event, file.url, 302)
})
