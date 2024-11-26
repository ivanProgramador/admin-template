import Layout from "@/components/template/Layout";
import useAppData from '@/data/hook/useAppData';

export default function Notificacoes() {
  const {alternarTema} = useAppData()

  return (
    
    <div>
        <Layout titulo="Notificações"

          subtitulo="Aqui você pode gerenciar as sua notificações" >
           
           <button onClick={alternarTema} >Alternar Tema</button>

        </Layout>
    </div>
  )
}