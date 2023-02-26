import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import logoTreeGames from "../media/logoTreeGamesNav.png"
import logoFacebook from "../media/logoFacebook.png"
import logoInsta from "../media/logoInsta.png"
import logoYoutube from "../media/logoYoutube.png"

function Contacto() {
    const language = useSelector(state => state.language);
    
    return(
        <section className="contacto">
            <h1 className="cabeceraAzul">{language.idioma==="Español"?"Contacto":"Contact"}</h1>
            <div className="offices">
                <h2 className="cabeceraAzul">{language.idioma==="Español"?"Nuestra oficina":"Our Offices"}</h2>
                <p>Glorieta de Viriato nº7</p>
                <p>C.P. 41089 Sevilla (Spain)</p>
            </div>
            <div className="mailContact">
                <h2 className="cabeceraAzul">Email</h2>
                <p>Treegamesstudios@gmail.com</p>
            </div>
            <div style={{display:"flex",justifyContent:"center",gap:"5rem"}}>
                <Link to={"/"} className="navLink"><input type={"Image"} src={logoFacebook} alt="Facebook" style={{zoom:"250%"}}/></Link>
                <Link to={"/"} className="navLink"><input type={"Image"} src={logoInsta} alt="Instagram" style={{zoom:"250%"}}/></Link>
                <Link to={"/"} className="navLink"><input type={"Image"} src={logoYoutube} alt="Youtube" style={{zoom:"250%"}}/></Link>
            </div>
            <div className="separador"></div>
        </section>
    )
}

export default Contacto;