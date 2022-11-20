import React, { useState } from "react"

export default function Usuario() {   
    return (
        <>     
           <UserUnico/>
        </>
    )
}

function UserUnico() {
	const ususario = [{imgPerfil: "./assets/img/perfil1.jpg", nomePerfil: "responde_ai", nome: "Monkey"}]
	return (
		<>
			{ususario.map((u) => <Perfil imgPerfil={u.imgPerfil} nomePerfil={u.nomePerfil} nome={u.nome} />)}
		</>
	)
}

function Perfil(props){
   
    const [nome, setNome] = React.useState(props.nome)
    const [imagem, setImagem] = useState(props.imgPerfil)

    function editarImagem(){
        setImagem(prompt("Escolha o link da imagem do seu perfil.")) 
    }

    function editarNome(){
        setNome(prompt("Qual nome deseja inserir?"))    
    }

    return(
        
        <div class="sidebar-topo usuario">
                <img onClick={editarImagem} src={imagem} />
                <div class="container">
                    <h1>{props.nomePerfil}</h1>
                    <p>{nome}<span onClick={editarNome}><ion-icon name="pencil"></ion-icon></span></p>
                </div>
            </div>
    )
}



