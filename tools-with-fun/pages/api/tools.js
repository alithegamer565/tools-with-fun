import fs from 'fs'
import path from 'path'
export default function handler(req,res){
  const p = path.join(process.cwd(),'data','tools.json')
  const tools = JSON.parse(fs.readFileSync(p,'utf8'))
  res.status(200).json({tools})
}
