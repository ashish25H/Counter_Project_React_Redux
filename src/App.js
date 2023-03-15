import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByValue } from "./CounterSlice";

function App() {
  const inputField = document.getElementById("input");
  // const [count, setCount] = useState("");
  const [input, setInput] = useState("");
  const num = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const getInput = (event) => {
    setInput(event.target.value);
  };

  // const setValue = ()=>{
  //   inputField.value = '';
  // }

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center bg-[#CAD5E2]">
      <div className="flex justify-center mt-5">
        <input
          id="input"
          className="border-2 border-[#120E43] rounded p-2 mr-2"
          type="number"
          placeholder="Enter any number"
          title="input"
          onChange={getInput}
        />
        <button
          onClick={() => {
            dispatch(incrementByValue(+input));
          }}
          className="bg-[#383CC1] px-5 py-2 rounded text-[#fff] text-xl "
        >
          Add Value
        </button>
      </div>
      <div className="flex items-center justify-center my-10">
        <button
          className="bg-[#383CC1] px-5 py-2 rounded text-[#fff] text-xl mr-5"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className="text-4xl font-semibold text-[#03203C]">{num}</span>
        <button
          className="bg-[#383CC1] px-5 py-2 rounded text-[#fff] text-xl ml-5"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-[#383CC1] px-5 py-2 rounded text-[#fff] text-xl"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
