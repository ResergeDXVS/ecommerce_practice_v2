import React from "react";
import { Link } from "react-router-dom";
import { HeaderBase, HeaderLogo, HeaderPages, HeaderNav } from "./styles";



const Header = () => {
    return (
        <HeaderBase>
            <HeaderLogo 
                aria-label="LOGO PRINCIPAL DE HOUND EXPRESS"
                src="/img/logoAzulBlancoHE.png" 
                alt="HOUND EXPRESS"/>
            <HeaderNav>
                <HeaderPages>
                    <Link
                        aria-label="Ir a la página de inicio" 
                        to="/">
                            Inicio
                    </Link>
                </HeaderPages>
                <HeaderPages>
                    <Link 
                        to="/guides"
                        aria-label="Ir a la página de registros de guías">
                            Registro de Guias
                    </Link>
                </HeaderPages>
                <HeaderPages>
                    <Link 
                        to="/status"
                        aria-label="Ir a la página de estado general de las guías">
                            Estado General
                    </Link>
                </HeaderPages>
                <HeaderPages>
                    <Link 
                        to="/list_guides"
                        aria-label="Ir a la página del listado de guías">
                            Lista de Guias
                    </Link>
                </HeaderPages>
            </HeaderNav>
        </HeaderBase>
    );
}
export default Header;