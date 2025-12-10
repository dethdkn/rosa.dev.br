/* eslint-disable no-inner-declarations */
import type { KVNamespace, R2Bucket } from '@cloudflare/workers-types'

declare global {
  var R2: R2Bucket | undefined
  var KV: KVNamespace | undefined
  var __env__: { R2: R2Bucket | undefined; KV: KVNamespace | undefined } | undefined
}
