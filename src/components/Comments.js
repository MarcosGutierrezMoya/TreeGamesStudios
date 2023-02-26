import { useSelector } from "react-redux";

function Comments() {
    
    const language = useSelector(state => state.language);

    return(
        <>
            <h2 style={{textDecoration:"underline"}}>{language.idioma==="Español"?"Comentarios:":"Comments:"}</h2>
            <textarea cols={100} rows={7} />
            <p className="comment" >{language.idioma==="Español"?"En desarrollo":"In development"}</p>
        </>
    )
}

export default Comments;