import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header>
        <h2>Getting Started with crypto</h2>
        <p>
          Feel like there are a ton of ways to start. Many opportunities and
          roads for everyone. Nervos? If so dont, its power to the plays baby so
          I think its best for everyone to learn how. But the one thing you need
          to remeber is to never risk more than you can afford. If you dont know
          how or what that means. Dont worry, I am setting up a blog, anyone who
          is sign up will recieve early bird updates. You know slow and steady.{" "}
        </p>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#setup">Setup</a>
            </li>
            <li>
              <a href="#requirements">Requirements</a>
            </li>
            <li>
              <a href="#contact">PM</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero  */}
      <div id="home" className="hero-dashboard">
        {/*
          image may will be in the background with content on within the block itself
          it will be wrapped
        */}

        <div className="hero-dashboard-box-content">
          <h1>deGspot</h1>
          <p>
            Remeber this is basically going to be a one page application. Just
            scroll down and save this or book mark this. I will update this a
            little better if anything.
          </p>
          <a>⬇️⬇️⬇️</a>
        </div>
      </div>

      {/* Sections */}
      <main className="sections">
        {/* About */}
        <section id="about">
          <header className="about-header">
            <h2>What is this about?</h2>
          </header>
          <div className="about-content">
            <p>If you are new to crypto, youre basically a n00b.</p>
          </div>
        </section>

        {/* Setup */}
        <section id="setup">
          <header className="setup-header">
            <h2>Getting started</h2>
          </header>
          <div className="setup-content">
            <p>
              Alrighty so you want to make sure you have metamask downloaded,
              setup and create an account. Make sure you keep you keys safe and
              sounds and dont loose it or else you will regret it. Anyways once
              you gotten yourself situated. Congratz welcome to web3.
            </p>
            <p>
              After that you will have options to choose different networks, I
              would say hope on the <a>nervos network</a> but I also would
              suggest staying on ethereum.
            </p>
            <p>
              If you are looking to try and fund your accounts I strongly
              suggest using{" "}
              <a href="https://www.crypto.com/y8yjabr8my" target="_blank">
                crypto.com
              </a>
            </p>
            <p>
              Once you got yourself with that also download the{" "}
              <strong>defi wallet</strong>. That is where you want to store your
              tokens. trust me. But fill free to buy and send your crypto where
              ever. I would say to look into getting that crypto.com card. But
              its up to you.
            </p>
            <p>
              After that contact me letting me know you have done something or
              there are some eager learners
            </p>
          </div>
        </section>

        {/* Requirements */}
        <section id="requirements">
          <header>
            <h2>You dont need much</h2>
          </header>
          <div className="requirement-content">
            <p>
              5 dollars a day will make a free man one day, as long as you have
              piece of paper. Thats all you really need. I guess a pencil too so
              you can write down your keys.
            </p>
            <p>
              Oh and I guess i forgot, maybe a brain, cause you really dont want
              to be like me and loose that paper that has the privkey to the
              very first bitcoin wallet you created.
            </p>
            <p>
              But I guess in like other terms, you have a phone, or computer, or
              even a tablet.
            </p>
          </div>
        </section>

        {/* contact me */}
        <section id="contact"></section>
      </main>
    </div>
  );
}

export default App;
