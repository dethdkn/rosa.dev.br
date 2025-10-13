import { Buffer } from 'node:buffer'

const R2Certificates = createStorage({ driver: R2Driver({ binding: 'R2', base: 'certificates' }) })
const R2Downloads = createStorage({ driver: R2Driver({ binding: 'R2', base: 'downloads' }) })

export default async function(fileDir: 'certificates' | 'downloads', fileName: string){
  const R2 = fileDir === 'certificates' ? R2Certificates : fileDir === 'downloads' ? R2Downloads : null

  if(!R2) throw new Error('Invalid file directory')

  const file = await R2.getItemRaw<ArrayBuffer>(fileName)

  if(!file) throw new Error('File not found')

  const buffer = Buffer.from(file)

  const headers = {
    'Content-Type': mime.getType(fileName) || 'application/octet-stream',
    'Content-Disposition': `inline; filename="${fileName.split('/').pop()}"`,
    'Content-Length': buffer.length.toString(),
  }

  return { buffer, headers }
}
