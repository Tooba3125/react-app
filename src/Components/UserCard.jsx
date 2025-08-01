// import "../App.css"; 

// const UserCard = ({ kuchBhi, name = "Unknown", phoneNo = "0000000000", age = "N/A" }) => {

//   const whenAgeClickedCalledFunction=()=>{
//     return(
//       kuchBhi(age)
//     )
//   }

//   return (
//     <div className="user-card">
//       <h2>{name}</h2>
//       <p><strong>Phone:</strong> {phoneNo}</p>
//       <p onClick={whenAgeClickedCalledFunction}><strong>Age:</strong> {age}</p>
//     </div>
//   );
// };    
 
// export default UserCard;

// import "../App.css"; 

// const UserCard = ({user}) => {
//   return (
//     <div className="user-card">
//       <h2>{user.name}</h2>
//       <p><strong>Phone:</strong> {user.phoneNo}</p>
//       <p><strong>Age:</strong> {user.age}</p>
//     </div>
//   );
// };    
 
// export default UserCard;



import "../App.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-card" style={{ backgroundColor : user.bgColor || "#ffffff" }}>
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
      <p>Phone: {user.phoneNo}</p>
    </div>
  );
};

export default UserCard;
