import {Link} from "react-router-dom";

function MovieCard(props) {

  return (
    <Link to="/partner">
    <div className="colleague__card">
        <img src={props.src} alt={props.name} className="colleague__picture" />
      <div className="colleague__description">
        <h2 className="colleague__title">{props.name}</h2>
      </div>
    </div>
    </Link>
  );
}

export default MovieCard;
