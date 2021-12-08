import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name ="google-signin-client_id" content="903895739581-p1h1c0hlsvgj9qqu4nf7asa86gum7qk6.apps.googleusercontent.com"></meta>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Testing! Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
