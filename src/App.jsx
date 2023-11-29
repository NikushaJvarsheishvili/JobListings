import "./App.css";
import "./New.css";
import ListingCard from "./components/ListingCard";
import data from "./data.json";
import { useState } from 'react'




const App = () => {

const [filterButtnArray, setFilterButtnArray] = useState([])


function filterRemove(index) {
  const removeFilter = filterButtnArray.filter((_,filterIndex) => {
    return filterIndex !== index
  })

  setFilterButtnArray(removeFilter)
}


const newArray = filterButtnArray.map((filterButtn, indexFilterButton) => {
  return <button onClick={() => filterRemove(indexFilterButton, filterButtn)} key={indexFilterButton} 
  className="filter-button">{filterButtn}</button>
})


function removeAllFilterBtn() {
  setFilterButtnArray([])
}



let filteredListings;

  if (filterButtnArray.length === 0) {
    filteredListings = data;
  } else {
    filteredListings = data.filter((item) => {
      const itemTags = [
        ...item.languages,
        ...item.tools,
        item.role,
        item.level,
      ];
      return filterButtnArray.some((savedTag) => itemTags.includes(savedTag));
    });
  }


  const listings = filteredListings.map((item, itemIndex) => {
    return (
      <ListingCard
        key={itemIndex}
        id={item.id}
        title={item.position}
        companyName={item.company}
        companyLogo={
          item.logo || "/images/company-placeholder.svg"
        }
        uploadDate={item.postedAt}
        contract={item.contract}
        location={item.location}
        isNew={item.new}
        isFeatured={item.featured}
        languages={item.languages}
        tags={[...item.languages, ...item.tools, item.role, item.level]}
        setFilterButtnArray={setFilterButtnArray}
        filterButtnArray={filterButtnArray}
      />
    );
  });

  

  return (
    <div>
        <img className="banner-img" src="/images/bg-header-mobile.svg" alt="" />
       {filterButtnArray.length === 0 ? null :  
       <div className="container filter-container">
            <div className="filter-btn-side">{newArray}</div>
            <div className="clear-all-side">
              <button onClick={removeAllFilterBtn} className="clear">Clear</button>
            </div>
        </div>}
        <div className="container card-container">{listings}</div>
    </div>
  );
};

export default App;

