import AuthInput from "@/components/auth/AuthInput";
import { useState } from "react";


export default function autenticacao(){
    const[modo,setModo] = useState<'login'|'cadastro'>('login');
    const[email,setEmail] = useState('')
    const[senha,setSenha] = useState('')


    return(<div> 
        <h3>autenticação</h3>
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

        </div>
    )
}