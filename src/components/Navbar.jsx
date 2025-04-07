import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light px-4 d-flex justify-content-end">
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
          Profile
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><Link className="dropdown-item" to="/">Home</Link></li>
          <li><Link className="dropdown-item" to="/doclogin">Login</Link></li>
          <li><Link className="dropdown-item" to="/docfeed">Feed</Link></li>
          <li><Link className="dropdown-item" to="/docpatient">Patients</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
