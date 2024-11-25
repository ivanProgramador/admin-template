import Link from "next/link"

interface MenuItemProps{
    url: string
    texto:string
    icone:any
}


export default function MenuItem(props:MenuItemProps){

    // adiretiva "legacyBehavior" é obrigatória (next 13) se eu queiser cololar um <a> dentro do <Link>
    return(
        <li className={`hover:bg-gray-100`}>
            <Link legacyBehavior href={props.url}>
               <a className={`
                  flex flex-col justify-center items-center 
                  h-20-full w-20`
                } >
                   {props.icone}

                   <span className={`
                       text-xs font-light text-gray-600
                     `} >
                        {props.texto}
                   </span> 
               </a>
                          
            </Link>
        </li>
    )
}