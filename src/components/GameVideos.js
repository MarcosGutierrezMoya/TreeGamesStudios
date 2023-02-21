import { useSelector } from "react-redux";
import info from "../apis/GamesInfo.json"

function GameVideos({video, gameName}) {
    const language = useSelector(state => state.language);
    const game = info[gameName];
    
    return(
        <section key={gameName} className={`demos ${gameName}`}>
            <h1>{gameName}</h1>
            <video width="1280" height="600" controls>
                <source src={video}></source>
            </video>
            <h1>{game[language.idioma].descripcion}</h1>
            <p style={{fontWeight:"bolder"}} >{game[language.idioma].resumen}</p>
        </section>
    )
}

export default GameVideos;