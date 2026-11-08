import empanadaPhoto from '../../assets/photos/Golden Empanada Cross-Section.png'

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span /> A taste of home, made to share</p>
        <h1>Golden, crispy<br />and full of <em>heart.</em></h1>
        <p className="hero-description">Meet Ilocos empanada: a beloved Filipino street-food classic with a crunch you can hear and a story worth sharing.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#menu">Get to know the menu <span aria-hidden="true">↓</span></a>
          <a className="text-link" href="#our-story">Our story <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-footnote"><span className="sun-mark">✳</span><span>Inspired by the food and warmth of Ilocos, Philippines</span></div>
      </div>
      <div className="hero-art">
        <img className="hero-photo" src={empanadaPhoto} alt="Golden Ilocos empanadas cut open to show their savory filling" />
        <div className="art-tag">A Filipino<br />favorite <span>✳</span></div>
        <span className="art-caption">Crisp outside. Joy inside.</span>
      </div>
    </section>
  )
}
