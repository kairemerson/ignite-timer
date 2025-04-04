import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

import logoIgnite from "../../assets/Logo.svg"
import { Scroll, Timer } from "phosphor-react";

export function Header() {
    return(
        <HeaderContainer>
            <img src={logoIgnite}/>
            <nav>

                <NavLink to="/" title="Timer"><Timer size={24}/></NavLink>
                <NavLink to="/history" title="Histórico"><Scroll size={24}/></NavLink>
            </nav>
        </HeaderContainer>
    )
}