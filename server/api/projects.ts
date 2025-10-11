export default defineEventHandler(async event => {
  const t = await useTranslation(event)

  const projects = (await kv<Projects[]>('projects')) || []

  const tProjects = projects.toReversed().map(p => ({ ...p, description: t(p.description) }))

  return tProjects
})
