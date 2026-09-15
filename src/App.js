import { useState } from "react";

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

  const [description,setdescription]=useState("");
  const [Q,setQ]=useState("")

  function handleSubmit(e) {
// privent the default form submission behavior
    e.preventDefault();
  }
  return (
    
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for this trip</h3>
      <select value={Q} onChange={(e)=>setQ(e.target.value)}>
        {console.log(Q)}
        {/* Create options for quantities 1 to 20 */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="item..." value={description} onChange={(e)=> setdescription(e.target.value)} />
      <button>Add</button>
      {console.log(description)}
    </form>
  );
}

function PakingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={{ textDecoration: item.packed ? "line-through" : "" }}>
        {item.quantity}-{item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>you have X paked , and you packed X (X%) </em>
    </footer>
  );
}

export default App;
