import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
      <div>
            <Carousel>
                <div>
                    <img src="assets/image/carousel/slider1.jpg" alt="slider1" />
                    
                </div>
                <div>
                    <img src="assets/image/carousel/slider2.jpg" alt="slider2" />
                 
                </div>
                
            </Carousel>
    </div>
  )
}

export default Slider