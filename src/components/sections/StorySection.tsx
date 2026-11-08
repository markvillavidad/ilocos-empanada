import kitchenPhoto from '../../assets/photos/Crispy Ilocos Empanadas in a Cozy Kitchen.png'

export function StorySection() {
  return (
    <section className="story section-wrap" id="our-story">
      <div className="section-kicker">01 <span>—</span> A little about us</div>
      <div className="story-content">
        <div className="story-copy">
          <h2>More than a snack.<br />A <em>taste of Ilocos.</em></h2>
          <div className="story-text">
            <p>From the northern Philippines comes a one-of-a-kind empanada: a vibrant orange rice-flour shell, fried until crisp, with a savory filling tucked inside.</p>
            <p>We’re here to share the flavors, stories, and little moments around this Filipino favorite. Pull up a chair—there’s always room for one more.</p>
            <a className="text-link" href="#visit">Get to know us <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <img
          className="story-photo"
          src={kitchenPhoto}
          alt="Golden Ilocos empanadas served in a cozy kitchen"
        />
      </div>
      <div className="story-note"><span>Made with a little<br />Ilocos sunshine</span><span className="note-flower">✳</span></div>
    </section>
  )
}
