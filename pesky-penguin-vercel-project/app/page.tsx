"use client";

import { useEffect, useState } from "react";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=3000+4th+Line+Road+Ohsweken+Ontario";
const appleMapsUrl =
  "https://maps.apple.com/?q=Pesky%20Penguin%20Frozen%20Treats&address=3000%204th%20Line%20Road%2C%20Ohsweken%2C%20Ontario";
const instagramUrl = "https://www.instagram.com/peskypenguinfrozentreats";
const facebookUrl = "https://www.facebook.com/113490717146951";

const treats = [
  {
    number: "01",
    title: "Island-style shaved ice",
    note: "The original",
    description:
      "Fluffy, snow-soft ice covered in your choice of 20+ bright, homemade syrup flavours.",
    image: "/images/rainbow-shaved-ice.webp",
    alt: "Rainbow island-style shaved ice",
    colour: "yellow",
  },
  {
    number: "02",
    title: "Ice cream favourites",
    note: "Scoop happy",
    description:
      "Premium cones, loaded sundaes and hand-spun milkshakes made for serious treat days.",
    image: "/images/cherry-cheesecake.webp",
    alt: "Cherry cheesecake ice cream",
    colour: "red",
  },
  {
    number: "03",
    title: "Ice cream nachos",
    note: "Pesky signature",
    description:
      "Crisp waffle pieces, big scoops, sauce, toppings and enough crunch to share. Maybe.",
    image: "/images/ice-cream-nachos.webp",
    alt: "Two loaded Pesky Penguin ice cream nachos",
    colour: "blue",
  },
];

export default function Home() {
  const [isMapOpen, setIsMapOpen] = useState(false);

  useEffect(() => {
    if (!isMapOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMapOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMapOpen]);

  return (
    <main>
      <div className="season-bar">
        <span className="season-dot" />
        Open for the 2026 season
        <span className="season-hours">Thu-Sun + holidays · 11am-9pm</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pesky Penguin home">
          <span className="brand-small">Frozen Treats</span>
          <span>Pesky Penguin</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#treats">Treats</a>
          <a href="#story">Our story</a>
          <a href="#visit">Visit</a>
        </nav>
        <button className="header-cta" type="button" onClick={() => setIsMapOpen(true)}>
          Find the truck
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Ohsweken&apos;s sweetest stop</p>
          <h1>
            Cool treats.
            <br />
            <span>Big smiles.</span>
          </h1>
          <p className="hero-intro">
            Homemade shaved ice syrups, towering sundaes, hand-spun
            milkshakes and a whole lot of happy.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#treats">
              Explore the treats
            </a>
            <button className="button button-ghost" type="button" onClick={() => setIsMapOpen(true)}>
              Get directions
            </button>
          </div>
          <div className="hero-proof" aria-label="Business highlights">
            <div><strong>20+</strong><span>shaved ice flavours</span></div>
            <div><strong>Since &apos;20</strong><span>serving up smiles</span></div>
            <div><strong>100%</strong><span>pure cane sugar syrups</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="sun-disc" />
          <div className="photo-frame">
            <img
              src="/images/pesky-truck-enhanced.png"
              alt="The bright blue Pesky Penguin frozen treats trailer"
            />
          </div>
          <div className="hero-sticker sticker-top">Made fresh</div>
          <div className="hero-sticker sticker-bottom">Come chill with us!</div>
        </div>
      </section>

      <div className="treat-marquee" aria-label="Treat selection">
        <span>Shaved ice</span><i>✦</i><span>Ice cream nachos</span><i>✦</i>
        <span>Fresh lemonade</span><i>✦</i><span>Milkshakes</span><i>✦</i>
        <span>Sundaes</span>
      </div>

      <section className="treats-section" id="treats">
        <div className="section-heading">
          <p className="eyebrow">Pick your happy</p>
          <h2>Meet the treats</h2>
          <p>
            From fruit-bright shaved ice to gloriously over-the-top desserts,
            every order should feel like the best part of summer.
          </p>
        </div>

        <div className="treat-grid">
          {treats.map((treat) => (
            <article className={`treat-card ${treat.colour}`} key={treat.title}>
              <div className="treat-image">
                <img src={treat.image} alt={treat.alt} />
                <span className="treat-number">{treat.number}</span>
              </div>
              <div className="treat-copy">
                <p>{treat.note}</p>
                <h3>{treat.title}</h3>
                <span>{treat.description}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="more-treats">
          <p>Also chilling at the truck</p>
          <div>
            <span>Fresh-squeezed lemonade</span>
            <span>Custom sodas</span>
            <span>Cookie ice cream sandwiches</span>
            <span>Cones &amp; sundaes</span>
            <span>Hand-spun milkshakes</span>
          </div>
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-image-wrap">
          <div className="story-image">
            <img
              src="/images/pesky-team-enhanced.png"
              alt="The Pesky Penguin team standing in front of their blue trailer"
            />
          </div>
          <span className="story-badge">Locally loved<br />since 2020</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">A little truck with big energy</p>
          <h2>Born to make Ohsweken smile.</h2>
          <p className="story-lead">
            Pesky Penguin started with island-style shaved ice in 2020. The
            menu grew, the truck got brighter, and the mission stayed simple:
            serve fun, memorable treats with a genuinely warm welcome.
          </p>
          <div className="story-values">
            <div><strong>Homemade syrups</strong><span>Pure cane sugar, no preservatives</span></div>
            <div><strong>Made for everyone</strong><span>Little treats, giant treats and everything between</span></div>
            <div><strong>Proudly seasonal</strong><span>Summer tastes better when it feels special</span></div>
          </div>
        </div>
      </section>

      <section className="flavour-section">
        <div className="flavour-copy">
          <p className="eyebrow light">Flavour without the boring</p>
          <h2>More than 20 ways to chill.</h2>
          <p>
            Go classic, go sour, mix two favourites or make it your own. The
            syrups are homemade with pure cane sugar and no preservatives.
          </p>
          <a className="button button-yellow" href={instagramUrl} target="_blank" rel="noreferrer">
            See what&apos;s pouring
          </a>
        </div>
        <div className="flavour-visual">
          <img src="/images/blue-razz.webp" alt="Blue Razz soda and lemonade" />
          <span className="flavour-note">Sweet · sour · bright · icy</span>
        </div>
      </section>

      <section className="gallery-section" aria-label="Pesky Penguin favourites">
        <div className="gallery-title">
          <p className="eyebrow">Currently craving</p>
          <h2>Worth the brain freeze.</h2>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-tall">
            <img src="/images/cookie-sandwich-enhanced.png" alt="Chocolate chip cookie ice cream sandwich" />
            <figcaption>Cookie sandwich</figcaption>
          </figure>
          <figure>
            <img src="/images/pesky-window-enhanced.png" alt="Pesky Penguin team serving from the trailer window" />
            <figcaption>Served with a smile</figcaption>
          </figure>
          <figure>
            <img src="/images/lavender-lemonade.webp" alt="Lavender lemonade" />
            <figcaption>Fresh lemonade</figcaption>
          </figure>
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-card">
          <p className="eyebrow light">Come on over and chill</p>
          <h2>Your next treat stop.</h2>
          <div className="visit-details">
            <div>
              <span>Find us</span>
              <strong>3000 4th Line Road<br />Ohsweken, Ontario</strong>
            </div>
            <div>
              <span>2026 season hours</span>
              <strong>Thursday-Sunday + holidays<br />11am-9pm</strong>
            </div>
          </div>
          <div className="visit-actions">
            <a className="button button-yellow" href={appleMapsUrl} target="_blank" rel="noreferrer">Apple Maps</a>
            <a className="button button-white" href={googleMapsUrl} target="_blank" rel="noreferrer">Google Maps</a>
            <a className="button button-white" href={instagramUrl} target="_blank" rel="noreferrer">Follow on Instagram</a>
          </div>
        </div>
        <div className="visit-image">
          <img src="/images/pesky-truck-enhanced.png" alt="Pesky Penguin frozen treats trailer ready to serve" />
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#top">
          <small>Frozen treats</small>
          Pesky Penguin
        </a>
        <p>Sweet treats. Sunny days. Happy people.</p>
        <div className="footer-links">
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          <a href={facebookUrl} target="_blank" rel="noreferrer">Facebook</a>
          <button className="footer-map" type="button" onClick={() => setIsMapOpen(true)}>Maps</button>
        </div>
        <span className="copyright">© 2026 Pesky Penguin Frozen Treats</span>
      </footer>

      {isMapOpen && (
        <div
          className="map-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsMapOpen(false);
          }}
        >
          <div className="map-modal" role="dialog" aria-modal="true" aria-labelledby="map-modal-title">
            <button
              className="map-close"
              type="button"
              aria-label="Close map options"
              onClick={() => setIsMapOpen(false)}
            >
              ×
            </button>
            <p className="eyebrow">Ready for a treat?</p>
            <h2 id="map-modal-title">Choose your map</h2>
            <p className="map-modal-copy">Get directions to 3000 4th Line Road in Ohsweken.</p>
            <div className="map-options">
              <a href={appleMapsUrl} target="_blank" rel="noreferrer" onClick={() => setIsMapOpen(false)}>
                <strong>Apple Maps</strong>
                <span>Best for iPhone and Mac</span>
              </a>
              <a href={googleMapsUrl} target="_blank" rel="noreferrer" onClick={() => setIsMapOpen(false)}>
                <strong>Google Maps</strong>
                <span>Open in Google Maps</span>
              </a>
            </div>
            <a className="map-address-link" href="#visit" onClick={() => setIsMapOpen(false)}>
              View address and hours
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
