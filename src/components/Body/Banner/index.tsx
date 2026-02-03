import React, { Fragment } from "react";
import { BannerStructure, MainStructure } from "./styles";

const Banner = () => {
    return (
        <Fragment>
            <BannerStructure>
                <h1>Hound Express</h1>
                <p>El mensajero fiel</p>
            </BannerStructure>
            <MainStructure>
                <h2>
                    Quiénes Somos
                </h2>
                <p>
                    Somos una empresa dedicada al empaque y envío seguro de mercancías, comprometida con brindar soluciones logísticas confiables y eficientes. Nuestro objetivo es que cada producto llegue a su destino en perfectas condiciones, respetando los tiempos de entrega y ofreciendo tranquilidad a nuestros clientes.
                </p>
                <p>
                    Con un equipo especializado y tecnología de vanguardia, trabajamos día a día para optimizar cada etapa del proceso: desde la preparación del paquete hasta su entrega final. Creemos en la importancia de la responsabilidad, la innovación y el servicio personalizado, valores que nos han permitido construir relaciones duraderas con quienes confían en nosotros.
                </p>
                <p>
                    Nos apasiona conectar personas y empresas, facilitando el comercio y fortaleciendo la confianza en cada envío.
                </p>
            </MainStructure>
        </Fragment>
    );
}

export default Banner;