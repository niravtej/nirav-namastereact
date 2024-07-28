import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./index.css";

/*

* Header
  - logo
  - nav
* Body
-Search
 -cart

*Footer 
 -copyright
 -links
 -Address
 -contact
 */
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
            <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>

            <div className="nav">
             <ul>
                 <li> Home </li>
                 <li> About Us </li>
                 <li> Cart </li>
                 <li> Contact Us </li>
            </ul>
            </div>

        </div>
    );
};
const styleCard = {
    backgroundColor:"#f0f0f0"
};
const Restrocard = () => {
   return( <div className="restro-card" style ={styleCard}>
   <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_769470.JPG"/>
   <h1> restro card</h1>
     </div>
);
};
const Search = () => {
    return(
        <div className="search">
          <span >search </span>
        </div>
    );
};
const Body = () => {
    return(
        <div className="body">
             <div className="search-container">
              <Search/>
            </div>
            <div className="restro-container">
               <Restrocard/>
            </div>
        </div>
    );
};
const AppLayout = () => {
    return(
        <div className="app">
        <Header/>
        <Body/>
        </div>
        );
}; 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);