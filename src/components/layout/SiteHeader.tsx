import { Brand } from './Brand'

export function SiteHeader() {
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="Main navigation">
        <a href="#our-story">Our story</a>
        <a href="#menu">The menu</a>
        <a href="#visit">Find us</a>
      </nav>
      <a className="header-cta" href="#visit">Come say hello <span aria-hidden="true">↗</span></a>
    </header>
  )
}
