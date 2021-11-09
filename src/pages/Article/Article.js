import React from 'react';
import { useState, useEffect} from "react";
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../../Services/firebase.js'
//  import Carousel from '../../components/Carousel/Carousel';
//  import uniqueSlide from '../../components/Carousel/CarouselData'

const Article = () => {
    const [trilha, setTrilha] = useState([])
    
    useEffect(() => {
        const trilhas = collection(db, 'trilha');
        const esperandoGetDocs = getDocs(trilhas)
        esperandoGetDocs.then((collectionTrilha) => {
             const newArray = [];
            collectionTrilha.forEach((doc) => {

                console.log(doc); 
                 const obj = {
                    Titulo: doc.data().Titulo,
                    Autora: doc.data().Autora,
                };
                newArray.push(obj);
            });
            console.log(newArray);
            setTrilha(newArray);
             
        })
    // const retornoDafuncao = esperandoGetDocs.docs.forEach(doc => doc.data())
    // console.log(retornoDafuncao)
    // return retornoDafuncao
    }, [])
    
    return (
        
        <div>
            <h1>Oi</h1>
            { trilha && trilha.map((article) => {

                return (
                    <div>
                        <div>{article.Titulo}</div>
                        <div>{article.Autora}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default Article;