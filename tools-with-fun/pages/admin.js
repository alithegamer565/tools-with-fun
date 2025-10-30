import Head from 'next/head'
import { useState } from 'react'

export default function Admin(){
  const [title,setTitle]=useState('')
  const [cat,setCat]=useState('')
  const [desc,setDesc]=useState('')
  const [html,setHtml]=useState('')
  const [msg,setMsg]=useState('')
  async function createTool(){
    const res = await fetch('/api/admin/tool',{
      method:'POST',
      headers:{'Content-Type':'application/json','x-admin-secret':window.ADMIN_SECRET || 'replace-me'},
      body:JSON.stringify({id: title.toLowerCase().replace(/\s+/g,'-'), title, category:cat, description:desc, html})
    })
    const j = await res.json()
    if(res.ok) setMsg('Tool created. Refresh to see changes.')
    else setMsg('Error: '+j.error)
  }
  return <>
    <Head><title>Admin - Tools with Fun</title></Head>
    <div style={{padding:20,maxWidth:900,margin:'0 auto'}}>
      <h2>Admin - Add Tool</h2>
      <div className="admin-note">Note: This admin writes to local file (works locally). For production use a database (MongoDB/Supabase).</div>
      <div style={{marginTop:12}}>
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} /><br/>
        <input placeholder="Category" value={cat} onChange={e=>setCat(e.target.value)} /><br/>
        <input placeholder="Short description" value={desc} onChange={e=>setDesc(e.target.value)} /><br/>
        <textarea placeholder="HTML content (tool UI)" value={html} onChange={e=>setHtml(e.target.value)} rows={6} style={{width:'100%'}}></textarea><br/>
        <button onClick={createTool}>Create</button>
      </div>
      <div style={{marginTop:12,color:'#064e3b'}}>{msg}</div>
    </div>
  </>
}
