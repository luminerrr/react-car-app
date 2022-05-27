import '../style.css';

function Navbar(){

    return(
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className='container'>
          <a className='navbar-brand box-shape' href='/'> </a>
          <div className="navbar-nav navbar-top">
            <a className="nav-link" href="/">Our Services</a>
            <a className="nav-link" href="/">Why Us</a>
            <a className="nav-link" href="/">Testimonial</a>
            <a className="nav-link" href="/">FAQ</a>
            <button className="btn btn-success">Register</button>
            </div>
        </div>
    </nav>
    )
    
}

export default Navbar;