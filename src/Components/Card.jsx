// const Card=({name='cardz', price='90', title='no', bg='#eb8628', img='https://plus.unsplash.com/premium_photo-1753420367628-97e66383278f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D'})=>{
//     return(
//         <div style={{width: "250px",border: "1px solid #ccc",borderRadius: "10px",padding: "16px",margin: "12px",textAlign: "center",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",backgroundColor: bg}}>
//             <img src={img} style={{width: "100%", height: "200px", objectFit: "cover",  borderRadius: "10px"}}/>
//             <h1>{name}</h1>
//             <h2>Price:  {price} $</h2>
//             <p>{title}.</p>
//         </div>
//     )
// };

// export default Card;
import "../App.css"; // correct relative path from Components/Card.jsx

const Card = ({
  name = 'Cardz',
  price = '90',     // props in comonent
  title = 'No',
  bg = '#eb8628',
  img = 'https://plus.unsplash.com/premium_photo-1753420367628-97e66383278f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D'
  ,addon='yummy'
}) => {
  return (
    <div className="card-main" style={{ backgroundColor: bg }} >
      <img
         src={img}
        alt={name}
        className="card-image"
      />
      <h2 style={{ fontSize: '1.2rem', margin: '8px 0' }}>{name}</h2>
      <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>💵 ${price}</p>
      <p style={{ fontStyle: 'italic', color: '#333' }}>{title}</p>
      <p>{addon}</p>
    </div>
  );
};

export default Card;
