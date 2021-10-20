import React from "react";
import "./Galeria.css";
import ImagemMar from "./mar.jpg";
import ImagemSurf from "./surf.jpg";
import ImagemFutebol from "./futebol.jpg";
import ImagemPorDoSol from "./pordosol.jpg";

export default function Galeria () {
    return(
    <>
    
        <header id="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Perfil</a></li>
            </ul>
        </header>
        <div id="info">
            <p id="titulo">Galeria de Imagens</p>
            <p>Aqui você encontra as imagens mais diversas.</p>
        </div>
        <div id="imagens">
            <div id="firstImagem">
                <img src={ImagemMar}></img>
                <p className="tituloImagens">Mar</p>
                <p className="conteudo">Uma imagem tirada do mar de boa viagem, abra a imagem e você conseguirá ver um tubarão.</p>
                <a href="#">Ver</a>
            </div>
            <div id="secondImagem">
                <img src={ImagemSurf}></img>
                <p className="tituloImagens">Surf</p>
                <p className="conteudo">Um belo tubo se formando e uma linda imagem desse esporte maravilhoso chamado Surf.</p>

                <a href="#">Ver</a>
            </div>
            <div id="thirdImagem">
                <img src={ImagemFutebol}></img>
                <p className="tituloImagens">Futebol</p>
                <p className="conteudo">Estádio de futebol lotado para assistir um grande espetáculo.</p>

                <a href="#">Ver</a>
            </div>
            <div id="fourImagem">
                <img src={ImagemPorDoSol}></img>
                <p className="tituloImagens">Por do sol</p>
                <p className="conteudo">Foto tirada de um fim de tarde no morro da conceição. Recife/PE</p>

                <a href="#">Ver</a>
            </div>
        </div>
        <footer id="rodape">
                <h1>Galeria</h1>
                <p>As mais belas imagens</p>
                <p>Copyright &copy; Henrique Fernandes 2021.</p>
        </footer>
    </>
    )  
}