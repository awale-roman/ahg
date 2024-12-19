import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <>
    <div className="footer">

    <div className="container">
      <div className="footer-list">
        <div>
          <h3 className="footer-title">Contact Us:</h3>
          <a href="tel:+9779808912602"> +977 9808912602</a> 
          </div>

        <ul>
          <li>

        <h3 className="footer-title">Social media:</h3>
          </li>
          <li><a href="mailto:kkhadicraft37@gmail.com" target="blank"><MdOutlineMailOutline /> Kkhandicraft37@gmail.com </a> </li>
          <li><a href="https://www.facebook.com/profile.php?id=61567599840189" target="blank"><FaFacebookF /> Art Handmade Gallery </a> </li>
          <li><a href="https://www.instagram.com/_art.handmade.gallery/" target="blank"><FaInstagram /> Art.handmade.gallery </a> </li>

           
        </ul>
      </div>
    </div>
    </div>
  </>
  )
}

export default Footer