

function App() {
  return (
    <div>
      <Logo/>
      <Form/>
      <PakingList/>
      <Stats/>

    </div>
  );
}


function Logo(){

  return(<h1>far away</h1>)
}

function Form(){


  return(<div className="add-form">
    <h3>what do you need for this trip</h3>
  </div>)
}

function PakingList(){

  return(<div className="list">LIST</div>)
}

function Stats(){

  return (<footer className="stats">
    <em>you have X paked , and you packed X (X%) </em>
  </footer>)
}






export default App;
