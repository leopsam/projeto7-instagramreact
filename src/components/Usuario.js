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

    if(imagem === ""){
        setImagem("./assets/img/perfil.jpg");
    }

    function editarNome(){
        setNome(prompt("Qual nome deseja inserir?"))    
    }

    if(nome === ""){
        setNome(prompt("Você não digitou um nome, Qual nome deseja inserir?"))
    }

    return(
        
        <div class="sidebar-topo usuario" data-test="user">
                <img data-test="profile-image" onClick={editarImagem} src={imagem} />
                <div class="container">
                    <h1>{props.nomePerfil}</h1>
                    <p data-test="name">{nome}<span onClick={editarNome} data-test="edit-name"><ion-icon name="pencil"></ion-icon></span></p>
                </div>
            </div>
    )
}



