import empanadasPhoto from '../../assets/photos/Golden Ilocos Empanadas on Wood.png'

type MenuItem = {
  number: string
  title: string
  price: string
  orderDetails: string
}

const menuItems: MenuItem[] = [
  { number: '01', title: 'Regular Ilocos Empanada', price: 'CA$6 each', orderDetails: 'Minimum order: 3 pieces' },
  { number: '02', title: 'Mini Ilocos Empanada', price: 'CA$45', orderDetails: '10 pieces per order' },
]

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="menu-card">
      <span className="card-number">{item.number}</span>
      <div className="card-copy">
        <h3>{item.title}</h3>
        <p className="menu-price">{item.price}</p>
        <p className="menu-order-details">{item.orderDetails}</p>
      </div>
    </article>
  )
}

export function MenuSection() {
  return (
    <section className="menu-section" id="menu">
      <div className="section-wrap">
        <div className="section-kicker">03 <span>—</span> Good things to eat</div>
        <div className="menu-heading">
          <div className="menu-heading-copy">
            <h2>Come hungry.<br /><em>Leave happy.</em></h2>
            <p>Freshly made Ilocos empanadas, ready to share.</p>
          </div>
          <img
            className="menu-photo"
            src={empanadasPhoto}
            alt="Golden Ilocos empanadas served on a wooden board"
          />
        </div>
        <div className="menu-cards">{menuItems.map((item) => <MenuCard item={item} key={item.number} />)}</div>
      </div>
    </section>
  )
}
