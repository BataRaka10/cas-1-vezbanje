
import React from "react";

// interface ProductInterface {
//     [phone:string]: number
// }


// let products:ProductInterface = {
//         "iPhone14": 1200,
//         "iPhone156": 1250,
//         "Samsuns s23 Ukltra": 1300,
// };

// let products = [
//         `iPhone14`, `iPhone15`, `Samsung s23 Ultra`

// let products = {
//         "iPhone14": 1120,
//         "iPhone15": 1300,
//         "Samsung s23 Ultra": 1340
// };


// let products = [
//         `iPhone14`, `iPhone15`, `Samsung s23 Ultra`
// ]

// let products = {
//         "iPhone": 1000,
//         "iPhone 15": 1200,
//         "Samsung s23 Ultra": 1400
// };

let products = {
        "iPhone": 1000,
        "iPhone 15": 1200,
        "Samsung s23 Ultra": 1400
};

// uloga prpova = jeste da vi prosledite neku dodatnu vrednost komponenti
// pdv za proizvod
//     hvatanje (props)
function Products(props) {
        console.log(props.tax)
        // console.log(props.tax)
    return (
       <>
        { Object.entries(products).map( ([phone, price]) => (
                <p>{ phone }, with tax: ${ calculateTax(price, props.tax) }</p>
        )) }
        {/* { Object.entries(products).map( ([phone,price]) => (
                <p>{ phone }, price: ${ price }</p>
        )) } */}
        
        {/* { Object.entries(products).map( ([phone, prce]) => (
                <p>{ phone }, price: ${ prce } </p>
        )) } */}
        {/* { Object.entries(products).map( ([phone, price]) => (
                <p>{ phone },  with tax: ${ ((price * props.tax) / 100 ) + price } </p>
        )) } */}

        {/* { Object.entries(products).map( ([phone, price]) => (
                <p>{ phone }, price: ${ price }</p>
        )) } */}
        {/* { Object.entries(products).map( ([phone, price]) => (
                <p>{ phone }, price: ${ price }, with tax: ${ ((price * props.tax) / 100 ) + price}</p>
        )) } */}

        {/* { Object.entries(products).map( ([phone, price]) => (
                <p>{ phone }, price: ${ price }, with tax: ${ ((price * props.tax) / 100) + price }</p>
        )) } */}

        {/* { Object.entries(products).map( ([phone, price]) => (
                <p>{ phone }, price: ${ price }, with tax: ${ ((price * props.tax) / 100) + price } </p>
        )) } */}

        {/* { Object.entries(products).map( ([phone, price]) => (
                <p>{ phone }, price: ${ ((price * props.tax) / 100) + price }</p>
        )) } */}
        {/* { Object.entries(products).map( ([phone, price]) => (
        <p>{ phone }, price { price } with tax: { ((price * props.tax) / 100) + 100 }</p>
       )) } */}
       </>
   );
}

function calculateTax(price, tax) {
        return ((price * tax) / 100 ) + price
}

// function calculateTax(price:number, tax:number):number {
//         return ((price * tax) / 100) + price
// }
// function calculateTax(price, tax) {
//         return ((price * tax) / 100) + price
// }

export default Products;

// let products = {
//     "iPhone14": 1000,
//     "iPhone15": 1020, 
//     "Samsung s23 Ultra": 1300
// }

// uloga prpova = jeste da vi prosledite neku dodatnu vrednost komponenti
// pdv za proizvod
//     hvatanje (props)


// interface ProductInterface {
//     [phone: string]: number
// }

// const products = [
//     `iPhone14`, `iPhone15`, `Samsung S23 Ultra`
// ]
// const products = [
//     `iPhone14`, `iPhone15`, `Samsung s23 Ultra`
// ];
// objekat moze i u zagradam moze i bez
// const products = {
//     "iPhone14": 1000,
//     "iPhone15": 1200,
//     "Samsung s23 Ultra": 1100,
// }

// const products:ProductInterface = {
//     "iPhone14": 1000,
//     "iPhone15": 1200,
//     "Samsung s23 Ultra": 1100,
// }

// function Products(props) {
//     console.log(props.tax)
//     return (
//         <>
//             { Object.entries(products).map( ([phone, price]) => {
                // <p>{ phone }, price: ${ price } with tax: { ((price * props.tax) / 100) + price} </p>
//                 <p>{ phone }, price: ${ price } with tax: ${ calculateTax(price, props.tax) }</p>
//             }) }
//         </>
//     );
// }

// function calculateTax(price:number, tax:number):number {
//     return ((price * tax) / 100) + price;
// }



// function Products(props) {
//     console.log(props.tax)
//     return (
//         <>
//             { products.map(phone => {
//                 return <p>{ phone }, tax: { props.tax }</p>
//             }) }
//         </>
//     );
// }

// console.log(props.tax) - hvatanje vrednosti

// function Products() {
//     return (
//         <>
//             { products.map(phone => {
//                 return <p>{ phone }</p>
//             }) }
//         </>
//     );
// }

// map je ist o sto i for petlja sluzi za ispisivanje 
// phone varijabla (za svaki upis) iz products
// phove -> vrednost svakog telefona
// return - paragraf sa tim imenom

// function Products(props) {
//     console.log(props.tax)
//     return (
        // <p>Hello World</p>
//         <>
//             { products.map(phone => {
//                 return <p>{ phone }, tax: { props.tax }</p>
//             }) }
//         </>
//     )
// }



// <></> parent ili div