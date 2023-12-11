import React from "react";


export default function DisplayItems(props) {
  const { listOfItems, handleUpdate, handleDelete } = props;

  const renderItems = listOfItems.map((currItem) => (
    <div key={currItem.key} className="display-item">
      <input
        type="text"
        id={currItem.key}
        value={currItem.itemDescription}
        onChange={(event) => handleUpdate(event.target.value, currItem.key)}
      />

      <button onClick={() => handleDelete(currItem.key)}>Delete Item</button>
    </div>
  ));

  return <div className="display-items-container">{renderItems}</div>;
}
