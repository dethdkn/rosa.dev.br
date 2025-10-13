const R2 = createStorage({ driver: R2Driver({ binding: 'R2' }) })

export default defineEventHandler(async () => await R2.getKeys())
