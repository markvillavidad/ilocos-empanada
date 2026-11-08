import kitchenPhoto from '../../assets/photos/Crispy Ilocos Empanadas in a Cozy Kitchen.png'

export function OurStorySection() {
  return (
    <section className="story section-wrap" id="our-story">
      <div className="section-kicker">02 <span>—</span> Our story</div>
      <div className="story-content">
        <div className="story-copy">
          <h2>A little taste<br />of home, made<br />with <em>love.</em></h2>
          <div className="story-text">
            <p>We started Ilocos Empanada with a simple idea: to share a beloved taste of home with our community in Mississauga.</p>
            <p>With roots in Ilocos Norte, Philippines, our small home-based business is a way to celebrate our culture, share the food we grew up loving, and bring a little piece of Ilocos closer to home.</p>
            <p>We prepare our empanadas for weekend orders, making each batch with care so you can enjoy them fresh and crispy.</p>
          </div>
        </div>
        <img
          className="story-photo"
          src={kitchenPhoto}
          alt="Ilocos empanadas prepared and served at home"
        />
      </div>
      <div className="story-note"><span>Made with a little<br />Ilocos sunshine</span><span className="note-flower">✳</span></div>
    </section>
  )
}
