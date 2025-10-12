export default defineEventHandler(async event => {
  const { R2 } = event.context.cloudflare.env
  const globalBucket = (globalThis as any).R2 ?? (globalThis as any).__env__?.R2

  const key = 'certificates/AWS_Udemy.pdf'

  let headEnv: null | R2Object = null
  let headGlobal: null | R2Object = null
  try {
    headEnv = await R2.head(key)
  }
  catch {
    headEnv = null
  }
  try {
    headGlobal = globalBucket && (await globalBucket.head(key))
  }
  catch {
    headGlobal = null
  }

  return {
    key,
    hasEnvR2: !!R2,
    hasGlobalR2: !!globalBucket,
    sameObject: R2 === globalBucket,
    existsViaEnv: !!headEnv,
    existsViaGlobal: !!headGlobal,
    envType: R2 ? Object.getPrototypeOf(R2).constructor.name : null,
    globalType: globalBucket ? Object.getPrototypeOf(globalBucket).constructor.name : null,
  }
})
