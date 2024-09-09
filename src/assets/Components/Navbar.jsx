function Navbar () {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <a href="#">
          <img src="" alt="logo" />
        </a> */}
        <a href="/" className="logo">
          FA
        </a>
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Connect">Let's Connect </a></li>

      </ul>
    </nav>
  )
}

export default Navbar
