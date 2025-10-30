import Head from 'next/head'
export default function TextTools(){
  return <>
    <Head><title>Text Tools - Tools with Fun</title></Head>
    <div style={{padding:20,maxWidth:900,margin:'0 auto'}}>
      <h2>Text Tools</h2>
      <textarea id="ta" rows="6" style={{width:'100%'}} defaultValue="Type or paste text here"></textarea>
      <div style={{marginTop:8}}>
        <button onClick={()=>{let t=document.getElementById('ta').value; let words=t.trim()?t.trim().split(/\s+/).length:0; alert('Words:'+words)}}>Word Count</button>
        <button onClick={()=>{let t=document.getElementById('ta').value; navigator.clipboard.writeText(t.toUpperCase()); alert('Converted to UPPER case and copied')}}>Upper Case</button>
        <button onClick={()=>{let t=document.getElementById('ta').value; navigator.clipboard.writeText(t.replace(/\s+/g,' ').trim()); alert('Removed extra spaces and copied')}}>Remove Extra Spaces</button>
      </div>
    </div>
  </>
}
