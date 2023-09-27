
function MovieCard(props) {

  return (
    <div className="colleague__card">
        <img src={props.src} alt={props.name} className="colleague__picture" />
      <div className="colleague__description">
        <h2 className="colleague__title">{props.name}</h2>
      </div>
    </div>
  );
}

export default MovieCard;
