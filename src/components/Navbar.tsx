export const Navbar = () => (
  <nav className="navbar navbar-expand-lg fixed-top portfolio-navbar">
    <div className="container">
      <a className="navbar-brand fw-bold text-white" href="#home">Islena<span className="text-purple">.</span></a>
      <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto gap-lg-3">
          <li className="nav-item"><a className="nav-link" href="#projects">Proyectos</a></li>
          <li className="nav-item"><a className="nav-link" href="#skills">Stack</a></li>
          <li className="nav-item"><a className="nav-link" href="#experience">Experiencia</a></li>
          <li className="nav-item"><a className="nav-link btn btn-sm btn-purple px-3 ms-lg-2" href="#contact">Contacto</a></li>
        </ul>
      </div>
    </div>
  </nav>
);
