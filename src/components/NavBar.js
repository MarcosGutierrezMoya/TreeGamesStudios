import { Link } from "react-router-dom"
import logoTreeGames from "../media/logoTreeGamesNav.png"
import logoFacebook from "../media/logoFacebook.png"
import logoInsta from "../media/logoInsta.png"
import logoYoutube from "../media/logoYoutube.png"

import { useDispatch } from "react-redux"
import { changeLanguage } from "../apis/languageSlice"
import { useSelector } from "react-redux";

function NavBar() {
    const banderaEsp = "https://i.pinimg.com/originals/e9/c8/1d/e9c81d73c81b7ca67ea64fce14388f89.png";
    const banderaIng = "https://i.pinimg.com/originals/9e/8b/9c/9e8b9c715d83ee8c9b7213b451766de7.png";

    const languageDispatch = useDispatch();
    const language = useSelector(state => state.language);


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
                <Link to={"/"} className="navLinkButton"><p>{language.idioma==="Español"?"Principal":"Home"}</p></Link>
                <Link to={"/Games"} className="navLinkButton"><p>{language.idioma==="Español"?"Juegos":"Games"}</p></Link>
                <Link to={"/AboutUs"} className="navLinkButton"><p>{language.idioma==="Español"?"Conócenos":"About Us"}</p></Link>
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