import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./users";

function App() {
  function handelClick() {
    alert("button clicked");
  }
  function addToCart() {
    alert("add to cart button clicked");
  }
  const addToCart2 = () => {
    alert("add to button clicked 2");
  };
  const addToCartFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>Vite + React</h3>
      <Friends></Friends>

      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handelClick}>Click ME</button>
      <br />
      <br />
      <button onClick={addToCart}>Add cart</button>
      <button onClick={addToCart2}>Add cart 2</button>
      <button onClick={() => addToCartFive(5)}>Add cart 5</button>
      <button
        onClick={() => {
          alert("add to cart 3 clicked");
        }}
      >
        Add cart 3
      </button>
    </>
  );
}

export default App;
