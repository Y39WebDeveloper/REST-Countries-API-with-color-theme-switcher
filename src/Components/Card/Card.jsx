import { Link } from "react-router-dom";
import "./Card.css";

function Card({ name, img, population, region, capital, cioc }) {
  return (
    <Link to={`/Details/${cioc}`}>
      <div className="card">
        <div className="card-img">
          <img src={img} alt="flag" />
        </div>
        <div className="card-body">
          <div className="name">{name}</div>
          <div className="card-details">
            <DetailsComponent title="Population" value={population} />
            <DetailsComponent title="Region" value={region} />
            <DetailsComponent title="Capital" value={capital} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;

function DetailsComponent({ title, value }) {
  return (
    <>
      <span className="title">
        {title}: <span>{value}</span>
      </span>
    </>
  );
}
