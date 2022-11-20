export default function Sugestoes() {

    return (
        <>
            <div class="sidebar-meio">                        
                <div class="container">
                                <div class="seguir">
                                    <p>Sugestões para você</p>
                                </div>
                                <div class="seguir">
                                    <a href="#">Ver tudo</a>
                                </div>                        
                </div>
                <Sugestao/> 
            </div>    
        </>
    )
}

function Sugestao() {
	const sugestoes = [
        {imgPerfil: "./assets/img/perfil2.jpg", nome: "stitch.sem.lilo"},
        {imgPerfil: "./assets/img/perfil3.jpg", nome: "ellie_playstation"},
        {imgPerfil: "./assets/img/perfil4.jpg", nome: "360brasil"},
        {imgPerfil: "./assets/img/perfil5.jpg", nome: "tonnyesterco"},
        {imgPerfil: "./assets/img/perfil6.jpg", nome: "impala-_-sobrenatural"},
       
    ]

	return (
		<>
			{sugestoes.map((s) => <Perfil imgPerfil={s.imgPerfil} nome={s.nome} />)}
		</>
	)
}

function Perfil(props){
    return(
        
        <div class="container">
            <div class="seguir">
                <div class="seguir-com-img">
                    <img src={props.imgPerfil} />
                </div>
                <div class="seguir-com-img">
                    <h1>{props.nome}</h1>
                    <p>Segue você</p>
                </div>
            </div>
            <div class="seguir seguir-com-img">
                <a href="#">Seguir</a>
            </div> 
        </div>                       
        
    )
}