// 1. APP.JSX CODE FOR ONLY FOR DISPLAY CARD KHUD SE USI WAQT FUNC SE PASS KERNA OBJECTS...

// import Card from "./Components/Card"

// const App = () => {
//     return (
    //     <div
    //         style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         flexWrap: "wrap",
    //         minHeight: "100vh",
    //         backgroundColor: "#f4f4f4",
    //   }}
    //     >
//             <Card bg='#28eb4c' img='https://images.unsplash.com/photo-1749219815845-9b82777436d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D' name='Card1' price='20' title='Yes' />
//             <Card bg='#eb2866' img='https://plus.unsplash.com/premium_photo-1753420367628-97e66383278f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D'  name='Card2' price='50' title='No'/>
//             <Card bg='#deeb28' img='https://images.unsplash.com/photo-1752643719497-b91314d6d253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D'  name='Card3' price='80' title='Yes'/>
//             <Card/>
//         </div>
    
//     );
// };


// export default App;


// 2. APP.JSX CODE FOR ONLY FOR DISPLAY CARD IF OBJECTS ARE STORED IN ARRAY...

// import Card from "./Components/Card"

// const App = () => {
    // const CARD_DATA = [
    //     {'id':'01', 'price':'200','src':'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D', 'bgcolor':'#f5e942'},
    //     {'id':'02', 'price':'100','src':'https://images.unsplash.com/photo-1486944859394-ed1c44255713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D', 'bgcolor':'#b042f5'},
    //     {'id':'03', 'price':'123','src':'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D', 'bgcolor':'#42f2f5'},
    //     {'id':'04', 'price':'170','src':'https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D', 'bgcolor':'#db5c07'},
    // ]

    // return(
    //     <div
    //         style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         flexWrap: "wrap",
    //         minHeight: "100vh",
    //         backgroundColor: "#f4f4f4",
    //   }}
    //     >
    //         {CARD_DATA.map((x,index)=>{return (<Card key={index} id={x.id} price={x.price} src={x.src} bgcolor={x.bgcolor}/>)})}
    //     </div>
    // )
// }
// export default App

// 3. Button 

// import { useState } from "react";
// import "./App.css"; // Import the CSS

// const App=()=>{

//     const ClickMe=()=>{
//         console.log("Button is clicked times ")
//     }

//     return(
//         <div style={{ padding: "50px 0 0 50px" }}>
//             <button onClick={ClickMe} className="button-styling">Click Me</button>
//         </div>
//     )
// }
// export default App

// 4. REACT HOOK USED IN BUTTON FUNCTION FOR RERENDERING in function passes...

// import "./App.css"; // Import the CSS
// import { useState } from "react";

// const App=()=>{
//     const [a,setA]=useState(1)
//     const ClickMe=()=>{
//         console.log("Button pressed")
//         const UpdatedValueOfA = ()=>{return(a+1)} 
//         setA(UpdatedValueOfA)
//     }
//     return(
//         <div style={{ padding: "50px 0 0 50px" }}>
//              <button onClick={ClickMe} className="button-styling">Click Me</button>
//              <h1> Value of A: {a} </h1>
//         </div>
//     )

// }
// export default App

// task related to button 


// import "./App.css"; // Import the CSS
// import { useState } from "react";

// const App=()=>{
//     const [a,setA]=useState('👋 👋 Hello World')
//     const ClickMe=()=>{
//         console.log("Button pressed")
//         if(a=='👋 👋 Hello World'){
//             setA('GoodBye World 👋 👋')
//         }else{
//             setA('👋 👋 Hello World')
//         }
//     }
//     return(
//         <div style={{ padding: "50px 0 0 50px" }}>
//              <button onClick={ClickMe} className="button-styling">Click Me</button>
//              <h1>{a}</h1>
//         </div>
//     )

// }
// export default App

// import { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [a, setA] = useState("Hello World!");

//   const ClickMe = () => {
//     console.log("Button pressed");
//     if (a === "Hello World!") {
//       setA("Goodbye World!");
//     } else {
//       setA("Hello World!");
//     }
//   };

//   return (
//     <div style={{ 
//       padding: "50px", 
//       display: "flex", 
//       flexDirection: "column", 
//       alignItems: "center", 
//       justifyContent: "center", 
//       minHeight: "100vh", 
//       background: "linear-gradient(to right, #07f7ef, #f7e707)", 
//       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" 
//     }}>
      
//       <button onClick={ClickMe} className="button-styling">
//         Click Me!
//       </button>
      
//       <h1 style={{ 
//         marginTop: "30px", 
//         fontSize: "2.5rem", 
//         color: "#333", 
//         textShadow: "1px 1px 4px rgba(0,0,0,0.2)" 
//       }}>
//         {a}
//       </h1>
//     </div>
//   );
// };

// export default App;



// 5. button with counter without function

//  import { useState } from "react";
// const App = () => {
//   const [products, setProducts] = useState(0);
//   console.log(products);

//   const updatedProducts = () => {
//     setProducts(products + 10);
//   };

//   return (
//     <div>
//       <h1>{products}</h1>
//       <button onClick={updatedProducts} className="button-styling">Add 10</button>
//     </div>
//   );
// };
// export default App


// 6. Product ki array me update with help of useState function


// import Card from "./Components/Card";
// import { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [products, setProducts] = useState([
//     {
//       id: "01",
//       price: "200",
//       src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
//       bgcolor: "#f5e942",
//     },
//     {
//       id: "02",
//       price: "100",
//       src: "https://images.unsplash.com/photo-1486944859394-ed1c44255713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
//       bgcolor: "#b042f5",
//     },
//     {
//       id: "03",
//       price: "123",
//       src: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
//       bgcolor: "#42f2f5",
//     },
//     {
//       id: "04",
//       price: "170",
//       src: "https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
//       bgcolor: "#db5c07",
//     },
//   ]);

//   const addproducts = () => {
//     setProducts([...products,{
//         id: "05",
//         price: "10",
//         src: "https://plus.unsplash.com/premium_photo-1752502983066-404559a320be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
//         bgcolor: "#db078aff",
//       },
//     ]);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column", // Stack vertically
//         alignItems: "center",
//         padding: "20px",
//         backgroundColor: "#f4f4f4",
//         minHeight: "100vh",
//       }}
//     >
//       <button onClick={addproducts} className="button-styling">
//         ➕ Add Product
//       </button>

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           marginTop: "20px",
//         }}
//       >
//         {products.map((product) => (
//           <Card
//             key={product.id}
//             price={product.price}
//             src={product.src}
//             bgcolor={product.bgcolor}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
// 
// export default App;


// 7. User card dynamically 

import UserCard from "./Components/UserCard"
import { useState } from "react"
import "./App.css"

const App=()=>{    
    const [user,setUser]=useState([
  { name: "John Doe", phoneNo: "2114142", age: "56" },
  { name: "Ayesha Khan", phoneNo: "03451234567", age: "23" },
  { name: "Ali Raza", phoneNo: "03119876543", age: "29" },
  { name: "Sara Ahmed", phoneNo: "03001239876", age: "31" }])

  const adduser=()=>{
    setUser([{ name: "Tooba Aftab", phoneNo: "42242525", age: "6" },...user])
  }

  const callMe=(val)=>{
    console.log('Function called with value:', val)
  }
    return(
        <div>
            <button onClick={adduser} className="button-styling">Add user</button>
            {user.map((i,index)=>{return <UserCard key={index} kuchBhi={callMe} name={i.name} phoneNo={i.phoneNo} age={i.age}/>})}
        </div>
    )
}
export default App