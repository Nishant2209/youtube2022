import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <h1 className="logo">V- Guide</h1>
        <div className="navItems">
          <a href="https://vguide.vercel.app/register.html">
            <button className="navButton">Register</button>
          </a>
          <a href="https://vguide.vercel.app/login.html">
            <button className="navButton">Login</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar