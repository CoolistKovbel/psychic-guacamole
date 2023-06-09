import "./App.css";
import Hero from "./components/Hero";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <MainFooter />

      {/* <aside>
        <p>
          Feel like there are a ton of ways to start. Many opportunities and
          roads for everyone. Nervos? If so dont, its power to the plays baby so
          I think its best for everyone to learn how. But the one thing you need
          to remeber is to never risk more than you can afford. If you dont know
          how or what that means. Dont worry, I am setting up a blog, anyone who
          is sign up will recieve early bird updates. You know slow and steady.{" "}
        </p>
      </aside> */}

      {/* Hero  */}
      <Hero />

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
            <p>Follow me on twitter and stay tune.</p>
          </div>
        </section>

        {/* contact me */}
        <section id="contact">
          <header>Contact Me</header>
        </section>
      </main>

      {/* Footer */}
      <MainHeader />
    </div>
  );
}

export default App;
