import "./Landing.css"
import Bg from "../../assets/Desktop.svg"
export function Landing(){
    return(
        <section className="hero">
            <h1 className="title">IOT INNOVATORS</h1>
            <p className="slogan">Ignite IoT innovation together</p>
            <img className="backimg" src={Bg} alt="Background"/>
        </section>
        
    )
}