
const TagList = ({ tags, filterButtnArray, ...props }) => {
  

  function click(tag) {
    // if(array.includes(tag)) {} else {
    //   props.setArray([...array, tag])
    // }

    props.setFilterButtnArray([...filterButtnArray, tag])
  }


  return (
    <div className={`tag-buttons-container `}>
      {tags.map((tag, tagIndex) => {
        return <button className={`tag-buttons ${filterButtnArray.includes(tag) ? 'active' : ''}`} disabled={filterButtnArray.includes(tag)} onClick={() => click(tag)} key={tagIndex}>{tag}</button>;
      })}
    </div>
   
  );
};

export default TagList;
