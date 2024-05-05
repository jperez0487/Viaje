import React from "react";
import "./Pie.css";
import { assets } from "../../assets/datos";
const Pie = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Encuéntranos en nuestras redes sociales</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.youtube_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.instagram_icon} alt="" />
            <img src={assets.tiktok_icon} alt="" />
            <img src={assets.whatsapp_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>EMPRESA</h2>
          <ul>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Contacto</li>
            <li>Otros</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>CONTACTO</h2>
          <ul>
            <li>Air Perú Tours</li>
            <li>Lima, Perú</li>
            <li>Calle Aguajal 267, El Agustino</li>
            <li>Teléfono: +51979089150</li>
            <li>reservas.airperutours@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Air Perú - Todos los derechos reservados.
      </p>
    </div>
  );
};

export default Pie;
