import "./AppContainer.css";
import { Card, SearchIcon, ArrowIcon } from "../";
import { useEffect, useState } from "react";



function AppContainer() {
  // Drop Menu Show/Hide //

  const [showDrop, setShowDrop] = useState(false);

  //=Drop Menu Show/Hide=//

  // region filter //
  const [regionFilter, setRegionFilter] = useState("All")
  //=region filter=//
  
  
  // search filter //
  
  const [searchFilter, setSearchFilter] = useState("")
  //=search filter=//

  // Fetch Data //

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cioc"
    )
      .then((res) => res.json())
      .then((countries0) => {
        let countries = Array.from(countries0);
        for (let i = 0; i < countries0.length; i++) {
          if (countries0[i].name.common == "Israel") {
            countries.splice(i, 1);
          }
        }
        return countries;
      })
      .then((data) => setData(data))
      .then((data) => console.log(data));
  }, []);

  const countries = data.map((i, id)=> <Card key={id} name={i.name.common} img={i.flags.png} population={i.population} region={i.region} capital={i.capital} cioc={i.cioc} />)
  const filtredCountries = countries.filter((i)=>{
    if(i.props.name.toLowerCase().includes(searchFilter.toLowerCase())){
      if(i.props.region.toLowerCase() === regionFilter.toLowerCase() || regionFilter === "All"){
      return i
    }
    }
  });

  return (
    <>
      <div className="container">
        <div className="search">
          <div className="input">
            <SearchIcon color={"#B2B2B2"} />
            <input type="text" placeholder="Search for a country…" value={searchFilter} onChange={(e)=> {setSearchFilter(e.target.value)}} />
          </div>
          <div className={`dropdown-menu ${showDrop ? "active" : ""}`}>
            <div
              className="dropdown-input"
              onClick={() => {
                setShowDrop(!showDrop);
              }}
            >
              <input
                type="text"
                data-selected={regionFilter}
                placeholder={regionFilter === "All" ? "Filter by Region" : regionFilter}
                readOnly
              />
              <ArrowIcon color={"#000"} />
            </div>
            <ul>
              <FilterItem setRegion={setRegionFilter} value="All" setDrop={setShowDrop} />
              <FilterItem setRegion={setRegionFilter} value="Africa" setDrop={setShowDrop} />
              <FilterItem setRegion={setRegionFilter} value="Asia" setDrop={setShowDrop}/>
              <FilterItem setRegion={setRegionFilter} value="Europe" setDrop={setShowDrop} />
              <FilterItem setRegion={setRegionFilter} value="North America" setDrop={setShowDrop} />
              <FilterItem setRegion={setRegionFilter} value="South America" setDrop={setShowDrop} />
              <FilterItem setRegion={setRegionFilter} value="Oceania" setDrop={setShowDrop} />
            </ul>
          </div>
        </div>
        <div className="cards">
          {filtredCountries}
        </div>
      </div>
    </>
  );
}

export default AppContainer;

function FilterItem({value, setRegion ,setDrop}){
  return (
    <li onClick={()=>{setRegion(value);setDrop(false)}}>{value}</li>
  )
}
