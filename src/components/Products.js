import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"

// .. is used in above image bz .. means come out from product , go to assets , images 
//Products COMPONENT
function Products() {
    return (
      <div className="products">
        <div className="box">
          <img src={one} alt=""></img>
            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>           
        <div className="box">
          <img src={two} alt=""></img>
            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div className="box">
          <img src={three} alt=""></img>
            <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>
      </div>
    )
  }

  export default Products