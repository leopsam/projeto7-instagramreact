import React from "react"

export default function Posts() {

    return (
        <>
            <Post/>                    
        </>
    )
}

function Post() {
	const posties = [
        {
            imgPerfil: "assets/img/user5.jpg", 
            nome: "rip_-_morty", 
            imgPost: "assets/img/post1.jpg",
            imgCurtir: "./assets/img/user2.jpg",
            nomeCurtir: "rock_roll_",
            like: 52
        },
        {
            imgPerfil: "assets/img/user6.jpg", 
            nome: "onii._.chan", 
            imgPost: "assets/img/post3.jpg",
            imgCurtir: "./assets/img/user3.jpg",
            nomeCurtir: "rma.driven",
            like: 102
        },
        {
            imgPerfil: "assets/img/user2.jpg", 
            nome: "rock_roll_", 
            imgPost: "assets/img/post2.jpg",
            imgCurtir: "./assets/img/user8.jpg",
            nomeCurtir: "responde.ai",
            like: 15
        }
    ]

	return (
		<ul class="posts">
			{posties.map((p) => <Perfil 
                imgPerfil={p.imgPerfil} 
                nome={p.nome} 
                imgPost={p.imgPost} 
                imgCurtir={p.imgCurtir}
                nomeCurtir={p.nomeCurtir}
                like={p.like}
                
                />)}
		</ul>
	)
}

function Perfil(props){
    const [salvaPost, setSalvaPost] = React.useState("bookmark-outline")
    const [coracao, setCoracao] = React.useState("assets/img/deslike.svg")
    const [likes, setLikes] = React.useState(props.like)    

    return(
        <li data-test="post" class="post-unid">
            <div class="post-top">
                            <div class="item">
                                <img src={props.imgPerfil}/>
                                <h2>{props.nome}</h2>
                            </div>
                            <div class="item">
                                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                            </div>
            </div>
            <img data-test="post-image" onClick={curtirPost} class="post-mid" src={props.imgPost}/>
            <div class="post-down">
                            <div class="container">
                                <div class="esquerda"> 
                                    <img data-test="like-post" class="like" onClick={curtir} src={coracao}/>                
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>                    
                                </div>
                                <div class="direita">
                                    <ion-icon data-test="save-post" onClick={salvar} name={salvaPost}></ion-icon>
                                </div>
                            </div>
                            <div class="curtido">
                                <img src={props.imgCurtir} />
                                <p>Curtido por <strong>{props.nomeCurtir}</strong> e <strong data-test="likes-number">outras {likes} pessoas</strong></p>
                            </div>
            </div>
        </li>
    )

    function curtirPost(){
        if(coracao === "assets/img/deslike.svg"){            
            setCoracao("assets/img/like.svg")
            setLikes(likes + 1)
        }
    }

    function curtir(){
        if(coracao === "assets/img/deslike.svg"){            
            setCoracao("assets/img/like.svg") 
            setLikes(likes + 1)           
        }else if(coracao === "assets/img/like.svg"){            
            setCoracao("assets/img/deslike.svg")
            setLikes(likes - 1)             
        }
    }

    function salvar(){
        if(salvaPost === "bookmark-outline"){
            setSalvaPost("bookmark")
        }else if(salvaPost === "bookmark"){
            setSalvaPost("bookmark-outline")
        }
    }   

}

