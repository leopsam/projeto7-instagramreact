import NavBar from "./NavBar"
import Corpo from "./Corpo"

export default function App() {
    return (
        <div>
            <NavBar/>
            <div className="corpo-principal">
                <Corpo/>
            </div>
        </div>
    )
}