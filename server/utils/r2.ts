const R2 = createStorage({ driver: R2Driver({ binding: 'R2' }) })

export default async function(filePath: string){
  const file = await R2.getItemRaw<Uint8Array>(filePath, { type: 'bytes' })

  if(!file) throw new Error('File not found')

  const headers = {
    'Content-Type': mime.getType(filePath) || 'application/octet-stream',
    'Content-Disposition': `inline; filename="${filePath.split('/').pop()}"`,
  }

  return { file, headers }
}
