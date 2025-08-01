import "../App.css"; 

const UserCard = ({ kuchBhi, name = "Unknown", phoneNo = "0000000000", age = "N/A" }) => {

  const whenAgeClickedCalledFunction=()=>{
    return(
      kuchBhi(age)
    )
  }

  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p><strong>Phone:</strong> {phoneNo}</p>
      <p onClick={whenAgeClickedCalledFunction}><strong>Age:</strong> {age}</p>
    </div>
  );
};    
 
export default UserCard;
