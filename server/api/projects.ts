export default defineEventHandler(async event => {
  const t = await useTranslation(event)

  const projects = (await mongo.collection('projects').find<Projects>({}).toArray()).map(p => ({ ...p, description: t(p.description) }))

  return projects
})
