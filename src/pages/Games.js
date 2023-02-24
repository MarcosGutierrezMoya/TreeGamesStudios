import { useState } from "react";
import GameVideos from "../components/GameVideos";
import NavBar  from "../components/NavBar";
// import CrazyRacy  from "../media/Trailer crazy racy.mp4";
// import Project_R  from "../media/Trailer project-r.mp4";

import Panels from "../components/Panels";

function Games() {
    const [video,setVideo] = useState("Project_R");

    const CrazyRacy = "d2KrO30XLDg"
    const Project_R = "I6s0tTGUkhA"

    function resize(e){
        let active = document.getElementsByClassName("active")[0];
        if (!e.target.classList.contains("active")) {
            active.classList.remove("active");
            e.target.classList.add("active");
        }
        setVideo(e.target.id);
    }


    return(
        <div className="games">
            <NavBar />
            <Panels resize={resize} />
            <GameVideos video={video==="CrazyRacy"?CrazyRacy:Project_R} gameName={video} />
        </div>
    )
}

export default Games;