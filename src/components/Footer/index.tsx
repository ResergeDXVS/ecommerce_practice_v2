import React from "react";
import { FooterContacts, FooterCopyrights, FooterNetworks, FooterPolicy, FooterStructure } from "./styles";

const Footer = () => {
    return (
        <FooterStructure>
            <FooterCopyrights>
                <p>&copy; 2025 Hound Express. Todos los derechos reservados.</p>
            </FooterCopyrights>
            <FooterPolicy>
                <a 
                    href="#" 
                    rel="noopener nofollow"
                    aria-label="Ir a la página de la pólitica y privacidad de Hound Express">
                    Pol&iacute;tica de Privacidad
                </a>
                <a 
                    href="#" 
                    rel="noopener nofollow"
                    aria-label="Ir a la página de términos y condiciones">
                    T&eacute;rminos y Condiciones
                </a>
                <a 
                    href="#" 
                    rel="noopener nofollow"
                    aria-label="Ir a la página de aviso legal">
                    Aviso Legal
                </a>
            </FooterPolicy>
            <FooterContacts>
                <p>Contacto: <a rel="noopener nofollow" href="mailto:houndexpresscontact@houndexp.com">houndexpresscontact@houndexp.com</a></p>
                <p>Tel: <a rel="noopener nofollow" href="tel:+525555555555">+52 55 5555 5555</a></p>
            </FooterContacts>
            <FooterNetworks>
                <a 
                    href="#" 
                    rel="noopener nofollow"
                    aria-label="Ir a la página de Facebook">
                    <i className="fi fi-brands-facebook">
                        <p>Facebook</p>
                    </i>
                </a>
                <a 
                    href="#" 
                    rel="noopener nofollow"
                    aria-label="Ir a la página de Instagram">
                    <i className="fi fi-brands-instagram">
                        <p>Instagram</p>
                    </i>
                </a>
                <a 
                    href="#" 
                    rel="noopener nofollow"
                    aria-label="Ir a la página de Twitter">
                    <i className="fi fi-brands-twitter-alt">
                        <p>Twitter (X)</p>
                    </i>
                </a>
            </FooterNetworks>
        </FooterStructure>
    );
}

export default Footer;