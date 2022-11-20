import SideBar from "./SideBar"
import Posts from "./Posts"
import Stories from "./Stories"

export default function Corpo() {

    return (
        <>
            <div class="container">            
                <Stories/>
                <Posts/>                      
            </div>
            <div class="container">           
                <SideBar/>          
            </div>        
            <div class="bara-inferior">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </>
        
    )
}