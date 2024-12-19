import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router";

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
            <a href="/">
            <h1 className="logo"><img src={'/assets/image/logo.png'} alt="logo" /></h1>
            </a>
          </li>

          <li>
        <p className="title">Art Handmade Gallery</p>


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