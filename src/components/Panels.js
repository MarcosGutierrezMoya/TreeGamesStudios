
function Panels({resize}) {
    const fondoProjectR  = "https://i.pinimg.com/originals/7b/e9/3e/7be93eab8555eda4b74b7b0cb9840164.jpg";
    const FondoCrazyRacy  = "https://i.pinimg.com/originals/83/70/e8/8370e8a8c5b9bc20fed994fbe1f6f46e.jpg";
    

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