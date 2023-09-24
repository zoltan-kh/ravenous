import React from "react";
import styles from "./Business.module.css";

function Business({
  name = "Papa Pizza",
  city = "Pasadena",
  state = "California",
  address = "Washington ave., 1",
  zip = "910000",
  category = "Fast-Food",
  rating = "4.88",
  reviewCount = "666",
  imgSrc = "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQcHbxCjB7FY6Rttw1VZFdh0gIZmm4MLLjfmD0dhA11saxBKG_D49VVkmlvz3sE71-b",
}) {
  return (
    <div className={styles.container}>
      <img className={styles.picture} src={imgSrc} alt="" />
      <table>
        <tbody>
          <tr>
            <td colSpan="2" className={styles.businessName}>
              {name}
            </td>
          </tr>
          <tr>
            <td className={styles.smallText} align="char">
              {address}
            </td>
            <td className={styles.categoryInfo} align="right">
              {category}
            </td>
          </tr>
          <tr>
            <td className={styles.smallText}>{state}</td>
            <td className={styles.ratingInfo} align="right">
              {rating} stars
            </td>
          </tr>
          <tr>
            <td className={styles.smallText}>{city}</td>
            <td className={styles.smallText} align="right">
              {reviewCount} reviews
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Business;
