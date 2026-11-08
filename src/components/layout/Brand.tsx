import logo from '../../assets/logo/logo3.png'

export function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Ilocos Empanada home">
      <img src={logo} alt="Ilocos Empanada" />
    </a>
  )
}
