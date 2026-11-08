import empanadaPhoto from '../../assets/photos/Golden Ilocos Empanadas on Wood.png'

export function WhatIsSection() {
  return (
    <section className="story section-wrap" id="what-is-ilocos-empanada">
      <div className="section-kicker">01 <span>—</span> What is Ilocos empanada?</div>
      <div className="story-content">
        <div className="story-copy">
          <h2>A taste of Ilocos<br /><em>in every bite.</em></h2>
          <div className="story-text">
            <p>Ilocos empanada is a beloved Filipino street food from the Ilocos region of Northern Philippines. It’s known for its vibrant orange, crispy rice-flour shell filled with grated green papaya, mung bean sprouts, egg, and savoury Ilocos longganisa.</p>
            <p>Each bite brings together a crunchy shell and a savoury filling, with the distinctive flavour of Ilocano longganisa. Traditionally served fresh with vinegar for dipping, it’s a delicious taste of Northern Filipino cuisine.</p>
          </div>
        </div>
        <img
          className="story-photo"
          src={empanadaPhoto}
          alt="Two golden Ilocos empanadas arranged on a wooden board"
        />
      </div>
    </section>
  )
}
