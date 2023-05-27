import { Link } from "react-router-dom";
import {  HeaderContainer, ListContainer, } from "./styles";

export function Header() {
    return(
        <HeaderContainer>
        
         <ListContainer>
            <div>
            <ul>
            <li>
            <h1>Trip.com</h1>
            <Link to="/"><a>Home</a></Link> 
            <Link to="/Hoteis"><a href="">Hoteis</a></Link> 
            <Link to="/AppPhone"><a>App</a></Link> 
            <a href="">Voos</a>
            <button>Buscar Reservas</button>
            <button>Entrar/Criar Conta</button>
            </li>
            </ul>
            </div>
         </ListContainer>
         
        
        </HeaderContainer>
    )
}