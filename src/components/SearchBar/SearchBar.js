import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ retreiveBusinesses, sortBusinesses }) {
  const [businessSearch, setBusinessSearch] = useState("");
  const [locationSearch, setLsocationSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("best_match");
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    retreiveBusinesses(businessSearch, locationSearch, searchTerm);
  }, [searchTerm]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    retreiveBusinesses(businessSearch, locationSearch, searchTerm);
  };

  const handleSortClick = (event) => {
    let criteria = event.target.name;
    setSearchTerm(criteria);
    const thisButton = event.currentTarget;
    setSelectedFilter((prev) => {
      if (prev) {
        prev.style.color = "white";
      }
      thisButton.style.color = "chartreuse";
      return thisButton;
    });
  };

  return (
    <div className={styles.searchBlock}>
      <form onSubmit={handleSubmit} id="filterForm">
        <table>
          <tbody>
            <tr>
              <td>
                <button
                  type="button"
                  name="best_match"
                  onClick={handleSortClick}
                  className={styles.sortButton}
                >
                  Best Match
                </button>
              </td>
              <td colSpan="2">
                <button
                  type="button"
                  name="rating"
                  onClick={handleSortClick}
                  className={styles.sortButton}
                >
                  Highest Rated
                </button>
              </td>
              <td>
                <button
                  type="button"
                  name="review_count"
                  onClick={handleSortClick}
                  className={styles.sortButton}
                >
                  Most Reviewed
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <input
                  className={styles.inputField}
                  placeholder="Search Bussinesses"
                  value={businessSearch}
                  onChange={({ target }) => setBusinessSearch(target.value)}
                />
              </td>
              <td colSpan="2" align="center">
                <input
                  className={styles.inputField}
                  placeholder="Where?"
                  value={locationSearch}
                  onChange={({ target }) => setLsocationSearch(target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="4">
                <button type="submit" className={styles.searchButton}>
                  Let's Go
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default SearchBar;
