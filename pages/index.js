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
          https://tyrannocoding.tistory.com/51
          https://blog.naver.com/PostView.nhn?blogId=ka28&logNo=222011121093
        </p>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
        <div class="autolink" data-onsuccess="autolink"></div>
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

function autolink(con) {
  var container = document.getElementById(con);
  var doc = container.innerHTML;
  var regURL = new RegExp("(http|https|ftp|telnet|news|irc)://([-/.a-zA-Z0-9_~#%$?&=:200-377()가-힣]+)","gi");
  var regEmail = new RegExp("([xA1-xFEa-z0-9_-]+@[xA1-xFEa-z0-9-]+\.[a-z0-9-]+)","gi");
  container.innerHTML = doc.replace(regURL,"$1://$2").replace(regEmail,"$1");
}
