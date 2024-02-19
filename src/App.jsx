import React, { useState, useEffect } from "react";
import ABTestText from "./AbTestText";
import ABTestImage from "./AbTestImage";
import "./App.css";

function App() {
  const [visitor, setVisitor] = useState(false);

  useEffect(() => {
    setVisitor(Math.random() < 0.5);
  }, []);

  const trackCTA = () => {
    console.log({
      event: "sign_up_clicked_from_home_page",
      cta: "Sign up",
      variant: visitor ? "TestText" : "TestImage",
    });
  };

  return (
    <main className="App">
      <header>
        <h1>Puppies</h1>
      </header>
      <section className="static">
        <p>
          Explore the world of puppies with our app. Sign up now for a
          heartwarming experience!
        </p>
      </section>

      <section className="dynamic">
        {visitor ? <ABTestText /> : <ABTestImage />}
      </section>

      <section className="ctaSection">
        <button
          onClick={trackCTA}
          type="button"
          aria-label="Click me to sign up for the app"
          className="ctaBtn"
        >
          Sign up
        </button>
      </section>
    </main>
  );
}

export default App;
