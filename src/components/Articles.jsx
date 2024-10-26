import { useState } from "react";
import CardMovies from "./childComponents/CardMovies";

const Articles = () => {
  const [movies, setMovies] = useState([
    {
      title: "Avengers",
      image: "../../public/imgs/cat-01.jpg",
      text: "Loressimos itaque dolore temporibus!"
    },
    {
      title: "Avengers",
      image: "../../public/imgs/cat-01.jpg",
      text: "Lores itaque dolore temporibus!"
    },
    {
      title: "Avengers",
      image: "../../public/imgs/cat-02.jpg",
      text: "Lorem iimos itaque dolore temporibus!"
    },
    {
      title: "Avengers",
      image: "../../public/imgs/cat-03.jpg",
      text: "Loressimos itaque dolore temporibus!"
    },
    {
      title: "Avengers",
      image: "../../public/imgs/cat-04.jpg",
      text: "Lorem iimos itaque dolore temporibus!"
    },
    {
      title: "Avengers",
      image: "../../public/imgs/cat-05.jpg",
      text: "Lorem itaque dolore temporibus!"
    },
    {
      title: "Avengers",
      image: "../../public/imgs/cat-06.jpg",
      text: "Loremimos itaque dolore temporibus!"
    },
    {
      title: "Avengers",
      image: "../../public/imgs/cat-07.jpg",
      text: "Lorem imos itaque dolore temporibus!"
    },
  ])
  return ( 
    <div className="articles">
      <div className="title">
        <span></span>
        <h2>DES ARTICLES</h2>
        <span></span>
      </div>
      <div className="movies">
        {
          movies.map((movie, index) => (
            <CardMovies key={index} title={movie.title} text={movie.text } image={movie.image} />
          ))
        }
       
      </div>
    </div>
   );
}
 
export default Articles;