import Sugestoes from "./Sujestoes";
import Usuario from "./Usuario";

export default function SideBar() {

    return (
        <>         
            <div class="sidebar">
                <Usuario/>
                <Sugestoes/>
                <div class="sidebar-rodape">
                    <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                        Termos • Localizações • Contas mais relevantes • Hashtags • 
                        Idioma</p>
                    <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                </div>
            </div>            
           
        </>
    )
}