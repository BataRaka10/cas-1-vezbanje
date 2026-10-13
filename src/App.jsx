
import React from "react";
import "./style.css" // -> ./ src
// import Products  from "./Components/Products";
// import siteLogo from "./vite.svg"
// import siteLogo from "./assets/vite.svg" // const siteLogo = "./assets/vite.svg"
// import siteLogo from './assets/vite.svg'
// import Products from "./Components/Products" // ./Components/Products -> src/Components/Products.jsx
// import siteLogo from "./assets/vite.svg"
import Products from "./Components/Products"
// import sajtLogo from "./assets/vite.svg"
import sajtLogo from "./assets/vite.svg"

let name = "Ana";

let paragraphColor = "red";

function App() {
    return (
        <>
            <p className="paragraph">pozdrav { name }</p>
            <img src={ sajtLogo } alt="" />
            <p style={{color: paragraphColor}}>prvi React app</p>
            < Products tax="20"/>
            < Products tax="25"/>
            < Products tax="55"/>
        </>
    );
}

export default App;

// <Products tax="20"/> tax="" je atribut

// import "./App.css"

// console.log("Hello World")

// { name }
// let name = "Ana";

{/* <img src={ siteLogo } alt="" /> */}

// let paragraphColor = "red"

// <></> parent tagovi

// function clickOnButton() {
//   console.log("Works")
// }

// function changeName(event) {
//     console.log(event.target.value)
// }

// props - prosledjivanje vrednosti
// tax - 20%
// function App() {

//     return (
//       <>
//         {/* <div>
        //   <p className="paragraph">Pozdrav ja se zovem { name }</p>
        //   <img src={ siteLogo } alt="" />
        //   <p className="paragraphColor">Ovo je moj prvi react app</p>
        //   <p style={{ color: "green" }}>Paragraf stajl</p>
        // </div> */}

//         <Products tax="20" />
//         <Products tax="35" />
//         <Products tax="55" />
//       </>
//     );
// }

/**
 * napraviti varijablu nama, i u html (jsx) ispisati sledecu poruku
 * pozdrav ja se zovem mame
 * name = "Ana"
 * poz ja se zovem Ana
 * 
 * coolor = "red"
 */