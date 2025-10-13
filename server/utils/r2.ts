const R2 = globalThis.R2 || globalThis.__env__?.R2

export default async function(filePath: string){
  if(!R2) throw new Error('R2 not found')

  const obj = await R2.get(filePath)

  if(!obj) throw new Error('File not found')

  const headers = {
    'Content-Type': mime.getType(filePath) || 'application/octet-stream',
    'Content-Disposition': `inline; filename="${filePath.split('/').pop()}"`,
  }

  return { file: obj.body, headers }
}
