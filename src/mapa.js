/*
O componente Layout retorna

 - MenuLateral

   - Logo 
     O componente logo é unico então ele não retorna nada além dele mesmo

   - MenuItem
     O menu item tem como props 

     - url?: string
     - texto:string
     - icone:any
     - className?:string
     - onClick?: (evento:any)=>void

     Essas props são passadas quando ele é chamado no MenuLateral, na sua composição ele retona um componente nativo
     chamado <Link></Link> oque torna clicavel o retorno da função renderizarLink()     


 - Cabecalho
 
    - Titulo
      possui duas props 
       - titulo:string
       - subtitulo:string

     Essas props são passadas quando ele é chamado no Layout 
     

 
    

*/