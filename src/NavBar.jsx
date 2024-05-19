function NavBar()
{

    
  const handleSignUpClick = () => {
    // Get the form field element by its id or class
    const formField = document.getElementsByClassName('btn');

    // Scroll to the form field
    formField.scrollIntoView({ behavior: 'smooth' });
  };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent" style={{ padding: '0px', backgroundColor: '#F4C2C2' }}>
        <a className="navbar-brand" style={{marginLeft:'2%'}} href="#">Robo<b>Meet</b></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">FAQ <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Use Cases <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Blog<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">News Letter <span className="sr-only">(current)</span></a>
                </li>
            </ul>
            <button   onClick={handleSignUpClick}  className='cart alert alert-dark cart ' style={{marginTop:'2%',marginBottom:'2%',marginRight:'2%',background:'black',color:'white'}} >Sign up for Free</button>
        </div>
      </nav>
    )
}

export default NavBar;