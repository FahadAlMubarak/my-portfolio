function Navbar () {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <a href="#">
          <img src="" alt="logo" />
        </a> */}
        <p className="logo">
          FA
        </p>
      </div>
      <ul>
        <li><a href="#Banner">Home</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Connect">Let's Connect </a></li>

      </ul>
    </nav>
  )
}

export default Navbar
