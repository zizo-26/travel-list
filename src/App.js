import { useState } from "react";

function App() {
const [item,setitem]=useState([]);

function addItem(item){

    setitem(items=>[...items,item])
  }


  function handelDelete(id){

     setitem(items=> items.filter(item=> item.id !== id))


  }
  return (
    <div>
      <Logo />
      <Form   onAddItems={addItem} />
      <PakingList  item={item} ondelete={handelDelete}/>
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>far away</h1>;
}

function Form({onAddItems}) {
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState(1);


  

  function handleSubmit(e) {
    // privent the default form submission behavior
    e.preventDefault();

    if (!description) return;

    const newItems = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItems)
  
    setdescription("");
    setquantity("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for this trip</h3>
      <select
        value={quantity}
        onChange={(e) => setquantity(Number(e.target.value))}
      >
        {/* Create options for quantities 1 to 20 */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PakingList({item ,ondelete}) {
  return (
    <div className="list">
      <ul>
        {item.map((item) => (
          <Item item={item}   ondelete={ondelete} />
        ))}
      </ul>
    </div>
  );
}
// i got an error in the delete function because i forget to return the new array after filtering it

function Item({ item,ondelete }) {
  return (
    <li>
      <span style={{ textDecoration: item.packed ? "line-through" : "" }}>
        {item.quantity}-{item.description}
      </span>
      <button onClick={()=>ondelete(item.id)} >❌</button>
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
