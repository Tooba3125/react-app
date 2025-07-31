import "../App.css"; 

const UserCard = ({ name = "Unknown", phoneNo = "0000000000", age = "N/A" }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p><strong>Phone:</strong> {phoneNo}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
};    
 
export default UserCard;
