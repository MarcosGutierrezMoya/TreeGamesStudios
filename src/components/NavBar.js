import { Link } from "react-router-dom"
import logoTreeGames from "../media/logoTreeGamesNav.png"
import logoFacebook from "../media/logoFacebook.png"
import logoInsta from "../media/logoInsta.png"
import logoYoutube from "../media/logoYoutube.png"
import banderaEsp from "../media/banderaEsp.png"
import banderaIng from "../media/banderaIng.png"

import { useDispatch } from "react-redux"
import { changeLanguage } from "../apis/languageSlice"
// import { useSelector } from "react-redux";

function NavBar() {

    const languageDispatch = useDispatch();
    // const language = useSelector(state => state.language);


    function cambiarIdioma(idioma) {
        switch (idioma) {
            case "ESP":
                languageDispatch(changeLanguage("Español"))
                break;
            case "ING":
                languageDispatch(changeLanguage("Ingles"))
                break;
            default:
                break;
        }
    }

    return (
        <div className="nav">
            <Link to={"/"} className="navLink"><input type={"Image"} src={logoTreeGames} alt="Logo"/></Link>
            <div>
                <Link to={"/"} className="navLinkButton"><p>Home</p></Link>
                <Link to={"/Games"} className="navLinkButton"><p>Games</p></Link>
                <Link to={"/AboutUs"} className="navLinkButton"><p>About Us</p></Link>
            </div>
            <div>
                <a className="navLink" href="https://www.facebook.com/profile.php?id=100087309365879"><input type={"Image"} src={logoFacebook} alt="Facebook"/></a>
                <a to={"/"} className="navLink" href="https://www.instagram.com/treegamesstudios/"><input type={"Image"} src={logoInsta} alt="Instagram"/></a>
                <a to={"/"} className="navLink" href="https://www.youtube.com/@treegamesstudios1231"><input type={"Image"} src={logoYoutube} alt="Youtube"/></a>
                <div>
                    <img src={banderaEsp} style={{height:"2rem", marginRight:"0.5rem", cursor:"pointer"}} onClick={()=>cambiarIdioma("ESP")} alt="bandera España" />
                    <img src={banderaIng} style={{height:"2rem", marginRight:"0.5rem", cursor:"pointer"}} onClick={()=>cambiarIdioma("ING")} alt="bandera América" />
                </div>
            </div>
        </div>
    )
}

export default NavBar;