import "../App.css"; // correct relative path from Components/Card.jsx

// 1.func se pass object

// const Card = ({name = 'Cardz',price = '90',title = 'No',bg = '#eb8628',img = 'https://plus.unsplash.com/premium_photo-1753420367628-97e66383278f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D',addon='yummy'
// }) => {
//   return (
//     <div className="card-main" style={{ backgroundColor: bg }} >
//       <img src={img} alt={name} className="card-image"/>
//       <h2 style={{ fontSize: '1.2rem', margin: '8px 0' }}>{name}</h2>
//       <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>💵 ${price}</p>
//       <p style={{ fontStyle: 'italic', color: '#333' }}>{title}</p>
//       <p>{addon}</p>
//     </div>
//   );
// };

// 2. array me stored objects 

const Card = ({id = '10',price = '90',bgcolor = '#eb8628',src = 'https://plus.unsplash.com/premium_photo-1753420367628-97e66383278f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D'
}) => {
  return (
    <div className="card-main" style={{ backgroundColor: bgcolor }} >
      <img src={src} alt={name} className="card-image"/>
      <h2 style={{ fontSize: '1.2rem', margin: '8px 0' }}>{id}</h2>
      <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>${price}</p>
    </div>
  );
};

export default Card;
