export default function Stories() {

    return (
        <>  
            <div class="stories">
                    <div class="stories-seta">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                    <Story/>      
            </div>
        </>
    )
}

function Story() {
	const stories = [
        {imagem: "assets/img/user1.jpg", nome: "tiagao.driven"},
        {imagem: "assets/img/user2.jpg", nome: "rock_roll_"},
        {imagem: "assets/img/user3.jpg", nome: "ma.driven"},
        {imagem: "assets/img/user4.jpg", nome: "maffe.driven"},
        {imagem: "assets/img/user5.jpg", nome: "rip_-_morty"},
        {imagem: "assets/img/user6.jpg", nome: "onii._.chan"},
        {imagem: "assets/img/user7.jpg", nome: "driven"},
        {imagem: "assets/img/user8.jpg", nome: "responde.ai"}
    ]

	return (
		<ul>
			{stories.map((p) => <Perfil imagem={p.imagem} nome={p.nome}/>)}
		</ul>
	)
}

function Perfil(props){
    return(
        <li class="perfil-stories">
            <div class="stories-borda">
                <img src={props.imagem} />
            </div>
            <p>{props.nome}</p>
        </li>
    )
}