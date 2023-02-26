import NavBar  from "../components/NavBar";
import perfiles from "../apis/PerfilesDB.json"
import Contacto from "../components/Contact";
import { useState } from "react";
import { useSelector } from "react-redux";

function AboutUs() {
    const db = perfiles;
    const language = useSelector(state => state.language);

    const [numPrefiles, setNumPerfiles] = useState(0);

    const [scrollPos, setScrollPos] = useState(0);
    document.addEventListener("scroll",showPerfiles);

    function showPerfiles(){
        if (window.scrollY > scrollPos) {
            if (window.innerHeight - document.getElementsByClassName("perfil")[numPrefiles]?.getBoundingClientRect().bottom >= -100 && numPrefiles < db.length) {
                document.getElementsByClassName("perfil")[numPrefiles].classList.add("perfilActivo");
                setNumPerfiles(numPrefiles+1);
            }
        }
        else if(window.scrollY < scrollPos && numPrefiles >= 0){
            if (window.innerHeight - document.getElementsByClassName("perfil")[numPrefiles]?.getBoundingClientRect().bottom < 10) {
                document.getElementsByClassName("perfil")[numPrefiles].classList.remove("perfilActivo");
                setNumPerfiles(numPrefiles-1);
            }
        }
        setScrollPos(window.scrollY);
    }
    
    return(
        <>
            <NavBar />
            <Contacto />
            <section className="perfiles" style={{height:`${((db.length+1)*24)*0.9}rem`}}>
                {db?.map((perfil,i)=>{
                        if (i%2===0) {
                            return(
                                <article key={i} className="perfil perfilIzq" style={{top:`${24*i}rem`}}>
                                    <img src={`${perfil.img}`} style={{position:"relative",top:"0",left:"20%"}} className="foto" alt="Raul foto" />
                                    <div style={{position:"relative",top:"0",left:"20%"}} >
                                        <h1 style={{color:"rgb(0,221,221)",fontSize:"3rem"}} >{perfil.nombre}</h1>
                                        <h3 style={{fontSize:"3rem"}} >{perfil.cargo}</h3>
                                        {perfil[language.idioma].ocupaciones.map((ocupacion,i)=>{
                                            return(
                                                <p key={`ocupacion${i}`} style={{fontSize:"1.5rem"}} >{i===perfil[language.idioma].ocupaciones.length-1?
                                                    `${language.idioma==="Español"?"y":"and"} ${ocupacion}`
                                                    : ocupacion}
                                                </p>
                                            )
                                        })}
                                    </div>
                                </article>
                            )
                        }
                        else{
                            return(
                                <article key={i} className="perfil perfilDrch" style={{top:`${24*i}rem`}}>
                                    <div style={{position:"relative",top:"0",right:"20%",width:"fit-content"}} >
                                        <h1 style={{color:"rgb(0,221,221)",fontSize:"3rem"}} >{perfil.nombre}</h1>
                                        <h3 style={{fontSize:"3rem"}} >{perfil.cargo}</h3>
                                        {perfil[language.idioma].ocupaciones.map((ocupacion,i)=>{
                                            return(
                                                <p key={`ocupacion${i}`} style={{fontSize:"1.5rem"}} >{i===perfil[language.idioma].ocupaciones.length-1?
                                                    `${language.idioma==="Español"?"y":"and"} ${ocupacion}`
                                                    : ocupacion}
                                                </p>
                                                )
                                            })}
                                    </div>
                                    <img src={`${perfil.img}`} style={{position:"relative",top:"0",right:"20%",rotate:"20deg"}} className="foto" alt="Raul foto" />
                                </article>
                            )                      
                        }
                })}
            </section>
        </>
    )
}

export default AboutUs;