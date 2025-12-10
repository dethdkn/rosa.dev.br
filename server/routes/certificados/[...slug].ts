export default defineEventHandler((event) =>
  sendRedirect(event, `/certificates/${getRouterParam(event, 'slug')}`, 301),
)
