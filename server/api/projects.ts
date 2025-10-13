export default defineEventHandler(async () => {
  const projects = (await kv<Projects[]>('projects')) || []

  const tProjects = projects.toReversed()

  return tProjects
})
