import empanadaBoxPhoto from '../../assets/photos/Ilocos Empanada Box and Sauces.png'
import { MESSENGER_URL } from '../../constants'

export function VisitSection() {
  return (
    <section className="visit section-wrap" id="visit">
      <div className="visit-decoration" aria-hidden="true"><span>✳</span></div>
      <div className="section-kicker">04 <span>—</span> Let’s make it a date</div>
      <div className="visit-content">
        <div>
          <h2>Your next<br />favorite bite<br /><em>is waiting.</em></h2>
          <p>Find us, ask about today’s menu, or get in touch about an order. We’d love to hear from you.</p>
        </div>
        <img
          className="visit-photo"
          src={empanadaBoxPhoto}
          alt="A box of golden Ilocos empanadas served with dipping sauces"
        />
        <div className="visit-card">
          <span className="visit-label">Find us in Meadowvale</span>
          <h3>We’d love to<br />see you soon.</h3>
          <address className="visit-address">
            <a
              href="https://share.google/mXJEjy9LTXBq2HYid"
              target="_blank"
              rel="noreferrer"
            >
              2825 Gananoque Drive<br />
              Meadowvale, Mississauga, ON L5N 1V6
              <span aria-hidden="true"> ↗</span>
            </a>
          </address>
          <p className="visit-hours">Open weekends</p>
          <p className="visit-description">
            Freshly made Ilocos empanadas are available on weekends. Planning to order? Send us a message!
          </p>
          <p className="visit-contact">
            <strong>Call or text:</strong>{' '}
            <a href="tel:+12896529921">+1 289 652 9921</a>
          </p>
          <p className="visit-order">
            <strong>Order now</strong> on{' '}
            <a href={MESSENGER_URL} target="_blank" rel="noreferrer">Messenger</a>
            {' '}or{' '}
            <a href="https://www.instagram.com/ilocosempanada.ca/" target="_blank" rel="noreferrer">Instagram</a>
            {' '}to place your order.
          </p>
          <div className="visit-social-group">
            <span className="visit-social-label">
              Follow us for weekly availability, menu updates, and a little taste of Ilocos!
            </span>
            <div className="visit-social-links" aria-label="Social media">
              <a
                className="visit-social"
                href="https://www.instagram.com/ilocosempanada.ca/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Ilocos Empanada on Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle className="social-icon-dot" cx="18" cy="6" r="1" />
                </svg>
              </a>
              <a
                className="visit-social"
                href="https://www.facebook.com/ilocosempanada.ca"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Ilocos Empanada on Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
