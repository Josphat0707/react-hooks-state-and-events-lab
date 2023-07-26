import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import "./App.css";

function App() {
  function darkMode() {
    setDarkMode((prevMode)=> !prevMode);
    
  }
  
  const[isDarkMode, setDarkMode]= useState(false);
  const appClass = isDarkMode ? "app dark":"app light";
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  //const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
