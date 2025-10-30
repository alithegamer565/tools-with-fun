import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

export default function Home({ tools }) {
  const categories = {};
  tools.forEach(t=> { categories[t.category]=categories[t.category]||[]; categories[t.category].push(t)})
  return (
    <>
      <Head>
        <title>Tools with Fun - Utilities & Mini Games</title>
        <meta name="description" content="Tools with Fun - calculators, text tools, file tools and mini games." />
      </Head>
      <div className="header">
        <img src="/logo.svg" alt="logo" style={{height:36}}/>
        <h1>Tools with Fun</h1>
      </div>
      <div className="container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
          <h2>Popular Tools</h2>
          <Link href='/admin'><a>Admin</a></Link>
        </div>
        {Object.keys(categories).map(cat=>(
          <section key={cat}>
            <h3>{cat}</h3>
            <div className="tool-grid">
              {categories[cat].map(t=>(
                <div className="tool-card" key={t.id}>
                  <h4>{t.title}</h4>
                  <p>{t.description}</p>
                  <div dangerouslySetInnerHTML={{__html:t.html}} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps(){
  const p = path.join(process.cwd(),'data','tools.json')
  const tools = JSON.parse(fs.readFileSync(p,'utf8'))
  return { props: { tools } }
}
