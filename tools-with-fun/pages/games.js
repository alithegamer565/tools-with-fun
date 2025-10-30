import Head from 'next/head'
export default function Games(){
  return <>
    <Head><title>Games - Tools with Fun</title></Head>
    <div style={{padding:20,maxWidth:900,margin:'0 auto'}}>
      <h2>Mini Games</h2>
      <div style={{marginTop:12}}>
        <a href="/?play=tic-tac-toe">Play Tic Tac Toe</a>
      </div>
    </div>
  </>
}
