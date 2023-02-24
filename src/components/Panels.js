import fondoProjectR  from "../media/fondoProjectR.jpg";
import FondoCrazyRacy  from "../media/FondoCrazyRacy.jpg";

function Panels({resize}) {


    return(
        <article className="panelImages">
            <div to={"/Games/Project_R"} id="Project_R" className={"panel active"}
                style={{backgroundImage: `url(${fondoProjectR})`}} onClick={resize} >
            </div>
            <div to={"/Games/CrazyRacy"} id="CrazyRacy" className={"panel"}
                style={{backgroundImage: `url(${FondoCrazyRacy})`}} onClick={resize} >
            </div>
        </article>
    )
}

export default Panels;