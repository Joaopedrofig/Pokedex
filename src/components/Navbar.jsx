import { NavLink } from "react-router-dom"
function Navbar() {
  return (
    <nav>
      <NavLink to="/">Início</NavLink>
      <NavLink to="/pokemon">Pokémon</NavLink>
      <NavLink to="/sobre">Sobre</NavLink>
    </nav>
  )
}

export default Navbar
