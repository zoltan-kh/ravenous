import React from "react";
import Business from "../Business/Business.js";
import styles from "./BusinessList.module.css";

function BusinessList({ businesses }) {
  let businessComponents = [];
  
  if (businesses.length) {
    for (let i = 0; i < businesses.length; i++) {
      let business = businesses[i];
      businessComponents.push(
        <Business
          key={business.id}
          name={business.name}
          imgSrc={business.image_url}
          city={business.location.city}
          state={business.location.state}
          address={business.location.address1}
          zip={business.location.zip_code}
          rating={business.rating}
          reviewCount={business.review_count}
        />
      );
    }
  }/* *else {
    for (let i = 0; i < 9; i++) {
      businessComponents.push(<Business />);
    }
  }*/

  return <div className={styles.businessList}>{businessComponents}</div>;
}

export default BusinessList;
