function MovieCard(props) {
    return (
            <div className="MovieCard">
                <img src={props.posterUrl} alt="Néant"></img>  
                <div className="movieInfo">
                <h3>{props.title}</h3>
                <span>{props.rate}</span>
                </div>
                <p>{props.description}</p>
            </div>
    );
  }
export default MovieCard;