import Head from 'next/head'
export default function Calculators(){
  return <>
    <Head><title>Calculators - Tools with Fun</title></Head>
    <div style={{padding:20,maxWidth:900,margin:'0 auto'}}>
      <h2>Calculators</h2>
      <div style={{marginTop:12}}>
        <div style={{marginBottom:16}}>
          <h4>Age Calculator</h4>
          <label>Birthdate: <input type="date" id="bd"/></label>
          <button onClick={()=>{const d=document.getElementById('bd').value; if(!d){alert('select');return;} alert('Age: '+(new Date().getFullYear()-new Date(d).getFullYear()))}}>Calculate</button>
        </div>
        <div>
          <h4>BMI Calculator</h4>
          <label>Weight (kg): <input id="w" type="number"/></label>
          <label>Height (m): <input id="h" type="number" step="0.01"/></label>
          <button onClick={()=>{const w=+document.getElementById('w').value; const h=+document.getElementById('h').value; if(!w||!h){alert('enter');return;} alert('BMI:'+ (w/(h*h)).toFixed(2))}}>Calculate</button>
        </div>
      </div>
    </div>
  </>
}
