const CardMovies = ({image, title, text}) => {
  return ( 
    
       <div className="card">
          <img src={image} alt={`image de ${image.title}`} />
          <div className="text">
          <h3>{title}</h3>
          <p>{ text}</p>
          </div>
          <hr />
          
          <div className="footer">
            <button>En savoir plus</button>
            <span className="fas fa-fleche">bh</span>
          </div>
      </div>
   
   );
}
 
export default CardMovies;