import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <meta name ="google-signin-client_id" content="903895739581-p1h1c0hlsvgj9qqu4nf7asa86gum7qk6.apps.googleusercontent.com"></meta>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Testing! Get started by editing <code>pages/index.js</code>
        </p>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
      </main>

      <Footer />
    </div>
  )
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}