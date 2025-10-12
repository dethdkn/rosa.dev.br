import { Buffer } from 'node:buffer'

const R2 = createStorage({ driver: R2Driver({ binding: 'R2' }) })

export default async function(filePath: string){
  const file = await R2.getItemRaw<ArrayBuffer>(filePath)

  if(!file) throw new Error('File not found')

  const buffer = Buffer.from(file)

  const headers = {
    'Content-Type': mime.getType(filePath) || 'application/octet-stream',
    'Content-Disposition': `inline; filename="${filePath.split('/').pop()}"`,
    'Content-Length': buffer.length.toString(),
  }

  return { buffer, headers }
}
