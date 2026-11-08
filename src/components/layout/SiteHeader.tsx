import { Brand } from './Brand'
import { MESSENGER_URL } from '../../constants'

export function SiteHeader() {
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="Main navigation">
        <a href="#our-story">Our Story</a>
        <a href="#menu">Menu</a>
        <a href="#visit">Find Us</a>
      </nav>
      <a className="header-cta" href={MESSENGER_URL} target="_blank" rel="noreferrer">
        Order Now <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}
