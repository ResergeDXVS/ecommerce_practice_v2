import React from "react";
import { FooterContacts, FooterCopyrights, FooterNetworks, FooterPolicy, FooterStructure } from "./styles";

const Footer = () => {
    return (
        <FooterStructure>
            <FooterCopyrights>
                <p>&copy; 2025 Hound Express. Todos los derechos reservados.</p>
            </FooterCopyrights>
            <FooterPolicy>
                <a href="">Pol&iacute;tica de Privacidad</a>
                <a href="">T&eacute;rminos y Condiciones</a>
                <a href="">Aviso Legal</a>
            </FooterPolicy>
            <FooterContacts>
                <p>Contacto: <a href="mailto:houndexpresscontact@houndexp.com">houndexpresscontact@houndexp.com</a></p>
                <p>Tel: <a href="tel:+525555555555">+52 55 5555 5555</a></p>
            </FooterContacts>
            <FooterNetworks>
                <a href="">
                    <i className="fi fi-brands-facebook">
                        <p>Facebook</p>
                    </i>
                </a>
                <a href="">
                    <i className="fi fi-brands-instagram">
                        <p>Instagram</p>
                    </i>
                </a>
                <a href="">
                    <i className="fi fi-brands-twitter-alt">
                        <p>Twitter (X)</p>
                    </i>
                </a>
            </FooterNetworks>
        </FooterStructure>
    );
}

export default Footer;