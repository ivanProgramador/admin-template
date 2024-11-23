import MenuLateral from "./MenuLateral"
import Cabecalho from "./cabecalho"
import Conteudo from "./Conteudo";

interface LayoutProps{
    titulo:string,
    subtitulo:string,
    children?:any
}

export default function Layout(props:LayoutProps){
    return(
        <div>
            <MenuLateral></MenuLateral>
            <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} ></Cabecalho>
            <Conteudo>
                {props.children}
            </Conteudo>

        </div>
    )
}

