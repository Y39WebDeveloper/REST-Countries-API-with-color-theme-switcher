import { BackIcon } from "../";
import "./Details.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Details() {
  const [country, setCountry] = useState({});

  
  const parms = useParams();
  const [code, setCode] = useState(parms.code)

  useEffect(() => {

    fetch(`https://restcountries.com/v3.1/alpha/${code.toLocaleLowerCase()==="isr"?"pse":code}`)
      .then((res) => res.json())
      .then((data) => setCountry(data))
  }, [code]);

  function currency() {
    try {
      let currencies = Object.values(country[0]?.currencies);
      let currency = currencies[0].name;
      return currency;
    } catch (error) {
      return (error = "unknown");
    }
  }

  function lang() {
    try {
      let language = Object.values(country[0]?.languages);
      let cont = "";
      if (language.length <= 1) {
        cont += `${language[0]}`;
      } else {
        for (let i = 0; i < language.length; i++) {
          cont += `${language[i]}, `;
        }
      }
      return cont;
    } catch {
      return "unknown";
    }
  }

  function border() {
    try {
      let cont = [];
      for (let i = 0; i < country[0]?.borders.length; i++) {
        cont.push(<BorderComponent key={i} setCode={setCode} value={country[0]?.borders[i]} />);
      }
      return cont;
    } catch (Unknown) {
      return (Unknown = "unknown");
    }
  }

  return (
    <div className="details">
      <Link to={"/"}>
        <button className="btn">
          <BackIcon color={"#111517"} />
          Back
        </button>
      </Link>
      <div className="body">
        <div className="flag">
          <img src={country[0]?.flags.svg} alt="" />
        </div>
        <div className="content">
          <div className="title">{country[0]?.name.common}</div>
          <div className="info">
            <ul>
              <DetailsComponent
                title="Official Name"
                value={country[0]?.name.official}
              />
              <DetailsComponent
                title="Population"
                value={country[0]?.population}
              />
              <DetailsComponent title="Region" value={country[0]?.region} />
              <DetailsComponent
                title="Sub Region"
                value={country[0]?.subregion}
              />
              <DetailsComponent title="Capital" value={country[0]?.capital} />
            </ul>
            <ul>
              <DetailsComponent
                title="Top Level Domain"
                value={country[0]?.tld[0]}
              />
              <DetailsComponent title="Currencies" value={currency()} />
              <DetailsComponent title="Languages" value={lang()} />
            </ul>
          </div>
          <div className="border">
            <h4>Border Countries: </h4>
            <ul>{border()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

function DetailsComponent({ title, value }) {
  return (
    <>
      <li>
        {title}: <span>{value}</span>
      </li>
    </>
  );
}
function BorderComponent({ setCode,value }) {
  return <li onClick={()=>{setCode(value)}}>{value}</li>;
}
