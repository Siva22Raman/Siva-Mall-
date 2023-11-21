import React from "react";
import Stores from "../components/Stores";
import '../Styles/Storelist.css'; // Make sure the path to your CSS file is correct

function StoreList() {
  return (
    <div className="store-list-container">
      <Stores />
    </div>
  );
}

export default StoreList;
