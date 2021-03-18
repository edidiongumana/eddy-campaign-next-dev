import Head from 'next/head'
import Homepage from '../components/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Nsikak Umoren Campaign site! </title>
        <meta name='description' content='Nsikak Umoren believes in popular participation. Get all details about him and information on how to participate directly on this site.'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <Homepage/>
      </main>

  
    </>
  )
}
