/*

Context Api

Os componentes ficam dentro de uma árvore vitual, isso significa que existem alguns niveis que precisam ser escalados
antes de chegar no componente e entregar uma informação para ele isso funciona muito bem em aplicações de pequeno porte 
porém em aplicações de grande porte essa partica é inviavel para resolver isso foi criada a estrategia de context api.

Na context api as informações dos componentes são compartilhadas de forma global para que qualquer componente que precise 
possa acessar, no caso desse projeto foram criados dois  arquivos o primeiro e de fato a definição doque será compartilhado
para fins de teste eu compartilhei apenas um objeto literal com um dados chamado nome, mas é possivel compartilhar diversos 
dados

Aqui eu crio um componetes provedor que faz essa distribuição e torna possivel o consumo dos dados  
--------------------------------------------------------------------------------------
import { createContext } from "react";

const AppContext = createContext({
    nome:null
});

export function AppProvider(props:any){
    return(
        <AppContext.Provider value={{nome:'Teste contect api'}}>

            {props.children}

        </AppContext.Provider>
    )
}

export default AppContext;
export const AppConsumer = AppContext.Consumer

--------------------------------------------------------------------------

Uma outra forma de disponibilizar esses dados é criando um hook 

------------------------------------------------------------------------
import { useContext } from "react";
import AppContext from "../context/AppContext";

const useAppData = () => useContext(AppContext)

export default useAppData
--------------------------------------------------------------------

consumo 
------------------------------------------------------
import Layout from "@/components/template/Layout";
import { AppConsumer } from "@/data/context/AppContext";
import useAppData from '@/data/hook/useAppData';

export default function Notificacoes() {
  const dados = useAppData()
  return (
    <div>
        <Layout titulo="Notificações"
          subtitulo="Aqui você pode gerenciar as sua notificações" >
           
           1- consumindo pelo AppConsumer
           
           <AppConsumer>
            {dados=> <h3>{dados.nome}</h3>}
           </AppConsumer>

           2 - consumindo pelo Hook
           <h3>{dados.nome}</h3>

        </Layout>
    </div>
  )
}
--------------------------------------------------------

mas para que esse isso seja possivel é necessario fazer a referencia no app.tsx
onde eu envolvo a funcção component
--------------------------------------------------------------------------------------

import { AppProvider } from "@/data/context/AppContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  return(
    <AppProvider>
       <Component {...pageProps} />;
    </AppProvider>
  ) 


}





*/