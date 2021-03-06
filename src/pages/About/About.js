import React from "react";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Button from "../../components/Button/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase.js";
import ResponsiveAlert from "./../../components/ResponsiveAlert/ResponsiveAlert";

import "./about.css";

const About = () => {
  const [articles, setArticles] = useState([]);

  const articlesCollectionRef = collection(db, "trilha");

  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(articlesCollectionRef);
      setArticles(
        data.docs.map((article) => ({ ...article.data(), id: article.id }))
      );
    };
    getArticles();
  }, []);

  const [beginner, setBegginer] = useState([]);
  const [intermediate, setIntermediate] = useState([]);
  const [advanced, setAdvanced] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setBegginer(
      articles.filter((article) => article.categoria === "Iniciante")
    );
    setIntermediate(
      articles.filter((article) => article.categoria === "Intermediária")
    );
    setAdvanced(articles.filter((article) => article.categoria === "Avançada"));

    const artFavorites = articles.filter((article) => article.likes > 1);
    const articlesFavorites = artFavorites.sort((a, b) => a.likes + b.likes);
    setFavorites(articlesFavorites);
  }, [articles]);

  useEffect(() => {}, [favorites]);

  const [tab, setTab] = useState("article");
  const handleTab = (tabSelect) => {
    setTab(tabSelect);
  };

  function clicou(e) {
    console.log("clicou", e);
  }

  return (
    <>
      <ResponsiveAlert />
      <div className="about">
        <Header />

        <div className="button-container">
          <button
            type="button"
            className="button-article"
            onClick={() => handleTab("article")}
          >
            Artigos
          </button>

          <button
            type="button"
            className="button-about"
            onClick={() => handleTab("about")}
          >
            Sobre
          </button>
        </div>
        <section className="container-public">
          {tab === "article" && (
            <div>
              <section className="section-carousel">
                <h2 className="title-sugestion-home">
                  {" "}
                  Mana, se está chegando agora Comece por aqui!
                </h2>
                {beginner != [] && (
                  <Carousel docArticle={beginner} cardClicked={clicou} />
                )}
              </section>

              <section className="section-carousel">
                <h2 className="title-sugestion-home">
                  {" "}
                  Se já tem um cofrinho, estes são para você:
                </h2>
                {intermediate != [] && (
                  <Carousel docArticle={intermediate} cardClicked={clicou} />
                )}
              </section>

              <section className="section-carousel">
                <h2 className="title-sugestion-home">Para as patroas:</h2>
                {advanced != [] && (
                  <Carousel docArticle={advanced} cardClicked={clicou} />
                )}
              </section>

              <section className="section-carousel">
                <h2 className="title-sugestion-home">Favoritos das amigas:</h2>
                {favorites != [] && (
                  <Carousel docArticle={favorites} cardClicked={clicou} />
                )}
              </section>
            </div>
          )}
          {tab === "about" && (
            <>
              <section>
                <article>
                  <h1>Sobre nós</h1>
                  <p className="about-cards">
                    O portal "Menina de Vila", é um projeto de educação
                    Financeira e Investimentos ligado ao Grupo Safra. Ele foi
                    "criado por, e para, Mulheres”, seu principal objetivo é
                    simplificar a linguagem do mercado financeiro, através de
                    conteúdos sobre educação financeira para as meninas que não
                    possuem acesso as informações na linguagem da periferia.
                  </p>
                </article>
                <article className="about-us">
                  <h1>Nossa história</h1>
                  <p className="about-cards">
                    Nascemos da indignação construtiva e do desejo de criar um
                    movimento voltado para transformação das comunidades, pois
                    sonhamos com um mundo onde todas possam ter as mesmas
                    oportunidades.
                    <br />
                    <strong>
                      Faça parte você também deste movimento, acredite que o
                      amanhã pode sim, ser a realização dos nossos sonhos, bora
                      escrever história!
                    </strong>
                  </p>
                </article>
              </section>
            </>
          )}
        </section>
        <Link to="/login">
          <Button className="class-button to-login">
            Fazer parte da comunidade
          </Button>
        </Link>
      </div>
    </>
  );
};

export default About;
