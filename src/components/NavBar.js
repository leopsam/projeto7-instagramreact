

export default function NavBar() {

    return (
        <>
            <div class="cabecalho">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="bara"></div>
                    <img src="./assets/img/logo.png"/>
                </div>
                <div class="pesquisa">
                    <input tipe="text" placeholder="Pesquisar"/>
                </div>
                <div class="menu-icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>        
            </div>

            <div class="cabecalho-mobile">
                <div class="item-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>            
                </div>
                <img src="assets/img/logo.png"/>
                <div class="item-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>            
                </div>        
            </div>
        </>
    )
}