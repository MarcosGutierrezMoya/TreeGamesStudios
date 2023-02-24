import { useSelector } from "react-redux";
import NavBar  from "../components/NavBar";
import logoTreeGames from "../media/logoTreeGames.png"

function Home() {

    const language = useSelector(state => state.language);
    
    return(
        <>
            <NavBar />
            <section className="homeLogo">
                <img src={logoTreeGames} alt="logoEmpresa" />
                <article>
                    <h1 className="cabeceraAzul">ABOUT US</h1>
                    {language.idioma==="Español"?
                        <p>Somos un equipo "Indie" español apasionados por la creación de videojuegos.
                            Todos nosotros siempre hemos querido vivir de hacer lo que nos gusta, y a nosotros nos encanta nuestro trabajo.
                            Cada uno es experto en su campo, se esfuerza y aporta todos sus conocimientos, para hacer juegos de calidad.
                        </p>
                    :
                        <p>We are a Spanish Indie team passionate about creating video games.
                            All of us have always wanted to live doing what we like, and we love our work.
                            Everyone is an expert in their field, they make an effort and contribute all their knowledge to make quality games.
                        </p>
                    }
                </article>
            </section>
        </>
    )
}

export default Home;