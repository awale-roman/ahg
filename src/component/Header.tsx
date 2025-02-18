import { Link, useNavigate } from "react-router";

import { FaArrowLeft } from "react-icons/fa6";

const Header = () => {
 
 let navigate = useNavigate()
  
  const onClickBack = () => {
    navigate('/')
  }
  
  return (
    <div className="navbar">
      <div className="container">
        <ul>
          <li>
            <Link to="/">
            <h1 className="logo"><img src={'/assets/image/logo.png'} alt="logo" /></h1>
            </Link>
          </li>


          <li>
          <p className="title">Art Handmade Gallery</p>
          </li>

          <li className="navlink">
            <Link to="/aboutus">About Us</Link>
          </li>


          {window.location.pathname !== '/' &&(
          <li>

        <button className="back-btn" onClick={onClickBack}><FaArrowLeft />
        Back</button>
          </li>
          )}

        </ul>
        </div>
    </div>
  )
}

export default Header