import AuthInput from "@/components/auth/AuthInput";
import { useState } from "react";
import { IconeAtencao } from "@/components/icons";


export default function autenticacao(){

    const[modo,setModo] = useState<'login'|'cadastro'>('login');
    const[email,setEmail] = useState('')
    const[senha,setSenha] = useState('')


    function submeter(){

      if(modo==='login'){
        console.log('login')
      }else{
        console.log('Cadastrar')
      }
        
       
    }

    


    return(

      <div className="flex flex-col h-screen items-center justify-center" >

        <div className="hidden md:block md:w-1/2" >
          <img
              src="https://api.unsplash.com/photos/random?count=5" 
              alt="Imagem da tela de autanticação"
              className="h-screen w-full object-cover"
           />
        </div>
    
        <div className="md-10 w-full  md:w-1/2"  > 
           
           <h1 className={`
             text-xl font-bold mb-5 
            `} >
              {modo === 'login' ? 'Entre com sua conta':'Cadastre-se na plataforma'}
            </h1>

            <div className={`
              flex items-center
              bg-red-400 text-white
              border border-red-700 rounded-lg 
            `}>

              {IconeAtencao(7)}

              
              <span className="ml-3">Ocorreu um erro</span>
            </div>


           <AuthInput 
              label="Email"
              tipo="email"
              valor={email}
              valorMudou={setEmail}
              obrigatorio
            />

            <AuthInput 
              label="Senha"
              tipo="password"
              valor={senha}
              valorMudou={setSenha}
              obrigatorio
             />

             <button onClick={submeter}
              className={` w-full bg-indigo-500 hover:bbg-indigo-400 
                           text-white rounded-lg px-4 py-3 mt-6
                `}
             >
               {modo === 'login' ? 'Entrar':'Cadastrar'}
               
             </button>

             <hr className="my-6 border-gray-300 w-full" />


             <button onClick={submeter}
              className={` w-full bg-red-400 hover:bbg-indigo-400 
                           text-white rounded-lg px-4 py-3 mt-6
                `}
             > 
               Entrar com o google
              
               
             </button>

             {modo =='login' ? (
                <p className="mt-8">
                   Novo por aqui ?
                   <a onClick={()=>setModo('cadastro')} className={`
                      text-blue-500 hover:text-blue-700 font-semibold
                      cursor-pointer
                    `} >Crie uma conta gratuitamente</a>

                </p>
                

             ):(

              <p className="mt-8">
                   Já faz parte da nossa comunidade ?
                   <a onClick={()=>setModo('cadastro')} className={`
                      text-blue-500 hover:text-blue-700 font-semibold
                      cursor-pointer
                    `} >
                      Entre com as suas credenciais
                    </a>
                </p>
              )}


        </div>

      </div>
    )
}