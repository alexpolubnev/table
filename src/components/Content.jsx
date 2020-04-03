import React, { useState } from "react";
import Item from "./Item";

function Content(props) {
  const [sorted, setSorted] = useState(false);
  const [items, setItems] = useState([...props.items]);

  const changeSort = () => {
    let sortedItems = [...items];
    if (sorted === "sorted") {
      setSorted("nosorted");
      sortedItems = sortedItems.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
      setItems(sortedItems);
    } else {
      setSorted("sorted");
      sortedItems = sortedItems.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      setItems(sortedItems);
    }
  };

  const searchItems = str => {
    const regExp = new RegExp(str, "i");
    let newItems = [];
    props.items.forEach(elem => {
      if (regExp.test(elem.name)) {
        newItems.push(elem);
      }
    });
    setItems(newItems);
  };

  return (
    <>
      <div className="search">
        <img src="./search.png" alt="search" />
        <input
          type="text"
          name="search"
          onChange={event => {
            searchItems(event.target.value);
          }}
        />
      </div>
      <div className="content">
        <div className="content__head">
          <div className="content__sort">
            <i className={sorted || ""} onClick={changeSort}>
              Tool name
            </i>
          </div>
          <i>Used on</i>
          <i>Type</i>
          <i>Status</i>
        </div>
        {items.map(elem => {
          return <Item key={elem.id} elem={elem} />;
        })}
      </div>
    </>
  );
}

export default Content;
