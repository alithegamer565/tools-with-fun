import fs from 'fs'
import path from 'path'
export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})
  const secret = req.headers['x-admin-secret'] || ''
  const expected = process.env.ADMIN_SECRET || 'changeme'
  if(secret !== expected) return res.status(401).json({error:'Unauthorized - invalid admin secret'})
  try{
    const body = req.body
    const p = path.join(process.cwd(),'data','tools.json')
    const tools = JSON.parse(fs.readFileSync(p,'utf8'))
    const idx = tools.findIndex(t=>t.id===body.id)
    if(idx>=0) tools[idx] = body
    else tools.push(body)
    fs.writeFileSync(p, JSON.stringify(tools,null,2),'utf8')
    return res.status(200).json({ok:true})
  }catch(e){
    return res.status(500).json({error:e.message})
  }
}
