import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/counter/action-creators";

export function Counter() {
  // console.log(useStore());
  const counter = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <span>Counter </span>
      {/* <span>{useStore().getState().counter}</span> */}
      <span>{counter}</span>
      <div>
        <button
          onClick={() => {
            dispatch(actions.incrementCounter());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(actions.decrementCounter());
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch(actions.resetCounter());
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
