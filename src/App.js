import logo from "./logo.svg";
import styles from "./App.module.css";
import BusinessList from "./components/BusinessList/BusinessList";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";
import { search } from "./utils/yelpConnector";

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [businessTerm, setBusinessTerm] = useState("cafe");
  const [locationTerm, setLocationTerm] = useState("NYC");
  const retreiveBusinesses = (businessSearch, locationSearch, searchTerm) => {
    console.log(
      "I am from the app cmp! " +
        businessSearch +
        " " +
        locationSearch +
        " " +
        searchTerm
    );
    if(businessSearch){
      setBusinessTerm(businessSearch);
    } 
    if(locationSearch){
      setLocationTerm(locationSearch);
    }
    search(businessTerm, locationTerm, searchTerm).then(data => {setBusinesses(data)});
  };

  const sortBusinesses = (criteria) => {
    retreiveBusinesses(businessTerm, locationTerm, criteria);
  };

  return (
    <div>

      <SearchBar
        retreiveBusinesses={retreiveBusinesses}
        sortBusinesses={sortBusinesses}
      />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
