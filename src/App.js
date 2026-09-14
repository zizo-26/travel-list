const initialItems = [
  { id: 1, description: "passports", quantity: 2, packed: true },
  { id: 2, description: "sunglasses", quantity: 1, packed: true },
  { id: 3, description: "water bottles", quantity: 4, packed: false },
  { id: 4, description: "snacks", quantity: 6, packed: false },
];

function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PakingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>far away</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>what do you need for this trip</h3>
    </div>
  );
}

function PakingList() {
  return (
    <ul className="list">
      {initialItems.map(item=> <Item item={item}/>)}
    </ul>
  );
}

function Item({item}){

  return(<li>{item.description}</li>)
}

function Stats() {
  return (
    <footer className="stats">
      <em>you have X paked , and you packed X (X%) </em>
    </footer>
  );
}

export default App;
