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
            <p>Well hopefully you choose yourself a group.</p>
            <p></p>
          </div>
        </section>

        {/* Requirements */}
        <section id="requirements"></section>

        {/* contact me */}
        <section id="contact"></section>
      </main>
    </div>
  );
}

export default App;
