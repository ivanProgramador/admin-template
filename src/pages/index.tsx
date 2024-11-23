import Layout from "@/components/template/Layout";

export default function Home() {
  return (
    <div className={`
      bg-gradient-to-r from-green-500 to-blue-500
     `}>
        <Layout titulo="Pagina inicial" subtitulo="Estamos construindo um template admin" >
           <h3>Conteudo</h3>
        </Layout>
    </div>
  )
}