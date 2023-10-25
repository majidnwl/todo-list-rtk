import React from "react";
import AddItem from "./AddItem";

const Header = () => {
    return (
        <div id="myDIV" className="header">
            <h2 style={{ margin: 5 }}>My To Do List</h2>
            <AddItem />
        </div>
    );
};

export default Header;
