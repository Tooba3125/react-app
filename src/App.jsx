import Card from "./Components/Card"

const App = () => {
    return (
        <div
            style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            minHeight: "100vh",
            backgroundColor: "#f4f4f4",
      }}
        >
            <Card bg='#28eb4c' img='https://images.unsplash.com/photo-1749219815845-9b82777436d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D' name='Card1' price='20' title='Yes' />
            <Card bg='#eb2866' img='https://plus.unsplash.com/premium_photo-1753420367628-97e66383278f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D'  name='Card2' price='50' title='No'/>
            <Card bg='#deeb28' img='https://images.unsplash.com/photo-1752643719497-b91314d6d253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D'  name='Card3' price='80' title='Yes'/>
            <Card/>
        </div>
    
    );
};


export default App;