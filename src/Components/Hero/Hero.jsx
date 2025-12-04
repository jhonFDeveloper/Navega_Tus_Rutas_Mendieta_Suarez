import "./Hero.css";
import hero from "../../assets/hero.png";

export const Hero = () => {

  return (

    <section className="hero-container">

      <div className="hero-text">
        <p className="subtitle">OUR BESTSELLERS</p>
        <h1 className="title">LATES TRENDS</h1>
        <p className="cta">BUY NOW</p>
      </div>

      <div className="hero-image">
        <img src={hero} alt="" />
      </div>

    </section>    
  )
  
}
