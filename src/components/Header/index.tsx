import React from "react";
import { Link } from "react-router-dom";
import { HeaderBase, HeaderLogo, HeaderPages } from "./styles";



const Header = () => {
    return (
        <HeaderBase>
            <HeaderLogo 
                src="/img/logoAzulBlancoHE.png" 
                alt="HOUND EXPRESS"/>
            <HeaderPages>
                <Link to="/">Inicio</Link>
            </HeaderPages>
            <HeaderPages>
                <Link to="/guides">Registro de Guias</Link>
            </HeaderPages>
            <HeaderPages>
                <Link to="/status">Estado General</Link>
            </HeaderPages>
            <HeaderPages>
                <Link to="/list_guides">Lista de Guias</Link>
            </HeaderPages>
        </HeaderBase>
    );
}
export default Header;