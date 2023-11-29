import { useState } from 'react'
import TagList from "./TagList";

const ListingCard = ({filterButtnArray, ...props}) => {


  return (
    <>
    <div className={`listing-card ${props.isFeatured ? "featured-listing" : ""}`}>
      <div className="img-container">
        <img
          className="company-img"
    
          src={props.companyLogo}
          alt={`${props.companyName} logo`}
        />
      </div>
      <div className="details-container">
        <div className="details-first-row">
          <h2 className="company-name">{props.companyName}</h2>
          <div className="badge-container">
            {props.isNew && <span className="new-badge">new</span>}

            {props.isFeatured && (
              <span className="featured-badge">featured</span>
            )}
          </div>
        </div>
        <h3 className="listing-title">{props.title}</h3>
        <ul className="listing-details">
          <li>{props.uploadDate}</li>
          <span className="bullet-symbol">&bull;</span>
          <li>{props.contract}</li>
          <span className="bullet-symbol">&bull;</span>
          <li>{props.location}</li>
        </ul>
      </div>

      <TagList 
        tags={props.tags} 
        setFilterButtnArray={props.setFilterButtnArray}
        filterButtnArray={filterButtnArray}
      />
    </div>


    </>
  );
};

export default ListingCard;
