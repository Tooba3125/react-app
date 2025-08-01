import { useState } from "react";
import "../App.css";

const UserForm = ({ closeForm, addUser }) => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("0313-");
  const [age, setAge] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff"); // New color state

  const handleSubmit = () => {
    const newUserData = { name, phoneNo, age, bgColor };
    console.log(newUserData);
    addUser(newUserData);
    closeForm();
  };

  return (
    <div className="user-form-main">
      <div className="user-form-contents">
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
          <p>Form</p>
          <p className="closeIcon" onClick={closeForm}>X</p>
        </div>
        <div className="all-forms-input">
          <div className="input-div">
            <label>Name</label>
            <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Your Name" />
          </div>
          <div className="input-div">
            <label>Age</label>
            <input onChange={(e) => setAge(e.target.value)} value={age} placeholder="Enter Your Age" />
          </div>
          <div className="input-div">
            <label>Phone No</label>
            <input onChange={(e) => setPhoneNo(e.target.value)} value={phoneNo} placeholder="Enter Your Phone" />
          </div>
          <div className="input-div">
            <label>Background Color</label>
            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
          </div>
        </div>
        <div className="buttons-user-form">
          <button className="close" onClick={closeForm}>Cancel</button>
          <button className="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
// 