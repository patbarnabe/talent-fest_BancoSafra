import React from 'react';
import { useState, useEffect } from "react";
import { onSnapshot, getDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../services/firebase.js'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/button.js';
import CarouselArticle from "../../components/Carousel/CarouselArticle";
import CopyToClipboard from 'react-copy-to-clipboard';

const Article = () => {
  const [trilha, setTrilha] = useState([])
  const [share, setShare] = useState('Conheça nossa pagina');
  const [shareButton, setIsShareButton] = useState(true)

  useEffect(() => {
    onSnapshot(doc(db, 'trilha', "1"), (doc) => {
      const newArray = [];
      const obj = {
        titulo: doc.data().titulo,
        autora: doc.data().autora,
        conteudo: doc.data().conteudo,
        imagem: doc.data().imagem,
        likes: doc.data().likes,
      };
      newArray.push(obj);
      setTrilha(newArray)
    })
  }, [])


  const likeArticle = async () => {
    const trilhas = doc(db, "trilha", "1");
    const esperandoGetDocs = getDoc(trilhas)
    esperandoGetDocs.then((docTrilha) => {
      const obj = {
        likes: docTrilha.data().likes
      };
      const addLike = obj.likes += 1
      console.log(addLike)
      updateDoc(trilhas, {
        likes: addLike
      });
      return addLike
    })
  }



  return (

    <div>
      <Header />

      <h1>Oi</h1>

      {trilha && trilha.map((article, index) => {
        console.log(article)
        return (
          <div key={index}>
            <div>
              <div>{article.titulo}</div>
              <div>{article.autora}</div>
              <CarouselArticle arrayConteudoSlides={article} />
            </div>
            <Button children='likes' onClick={() => likeArticle()} />
            <div className='icons-card'>
              <i className="far fa-bookmark"></i>
              <i className="far fa-heart"><span className="number-likes">{article.likes}</span></i>
            </div>

          </div>
        )
      })}
      {shareButton === true ? (<div className='icon-article'><Button value={shareButton} onClick={setIsShareButton} className='icon-article'> <i class="fas fa-share-alt"></i></Button></div>
      ):
        <div className='input-group s'>
          <input type='text' value={share} onChange={e => setShare(e.target.value)}></input>
          <CopyToClipboard text={share}>
            <button><i class="far fa-copy"></i></button>
          </CopyToClipboard>
        </div>
      }
      <Navbar />
    </div>
  )
}



export default Article;