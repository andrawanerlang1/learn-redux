import { useSelector, useDispatch } from "react-redux";
import { penambahan, pengurangan, sign } from "./actions";

function App() {
  const divStyle = {
    padding: 30,
  };
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div style={divStyle} className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(penambahan())}>+</button>
      <button onClick={() => dispatch(pengurangan())}>-</button>
      {isLogged ? <h3>You are logged in</h3> : <h3>You are logged out</h3>}
      <button onClick={() => dispatch(sign())}>
        {" "}
        {isLogged ? "sign out" : "sign in"}
      </button>
    </div>
  );
}

export default App;
