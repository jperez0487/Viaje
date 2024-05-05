import React, { useEffect } from "react";

import "./Cabecera.css";
import BarraMenu from "../BarraMenu/BarraMenu";
const Cabecera = () => {
  const fprev = () => {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
  };

  const fnext = () => {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]); // tamanho de items = 6
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      fnext();
    }, 5000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    
    <div className="container">
      <BarraMenu />
      <div className="slide">
        <div
          className="item"
          style={{
            backgroundImage: `url('./src/assets/paisaje/paisaje1.jpg')`,
          }}
        >
          <div className="content">
            <div className="name">Peru</div>
            <div className="des">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <button>Ver Mas</button>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url('./src/assets/paisaje/paisaje2.jpg')`,
          }}
        >
          <div className="content">
            <div className="name">Chile</div>
            <div className="des">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <button>Ver Mas</button>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url('./src/assets/paisaje/paisaje3.jpg')`,
          }}
        >
          <div className="content">
            <div className="name">Argentina</div>
            <div className="des">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <button>Ver Mas</button>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url('./src/assets/paisaje/paisaje4.jpg')`,
          }}
        >
          <div className="content">
            <div className="name">Brasil</div>
            <div className="des">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <button>Ver Mas</button>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url('./src/assets/paisaje/paisaje5.jpg')`,
          }}
        >
          <div className="content">
            <div className="name">Bolivia</div>
            <div className="des">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <button>Ver Mas</button>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url('./src/assets/paisaje/paisaje6.jpg')`,
          }}
        >
          <div className="content">
            <div className="name">Colombia</div>
            <div className="des">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <button>Ver Mas</button>
          </div>
        </div>
      </div>

      <div className="button">
        <button onClick={fprev}>
          <i className="fa-sharp fa-solid fa-arrow-left"></i>
        </button>
        <button onClick={fnext}>
          <i className="fa-sharp fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};
{
  /*
    <div className='cabecera'>
        <div className="cabecera-contenido">
            <h2>Descubre cusco el ombligo del mundo</h2>
            <p>"Un destino que despierta los sentidos y alimenta el alma con su arte , su historia y su esencia indomable"</p>
        </div>
    </div>
  */
}
export default Cabecera;
