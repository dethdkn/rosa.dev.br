import { head } from '@vercel/blob'

const { blobToken } = useRuntimeConfig()

export default defineEventHandler(async event => {
  const file = await head(`certificates/${getRouterParam(event, 'slug')}`, { token: blobToken })
    .catch(() => { throw createError({ statusCode: 404, message: 'Certificate not found' }) })

  return sendRedirect(event, file.url, 302)
})
