import { connect } from "react-redux";
import * as ActionCreators from "./actions";

function App(props) {
  const { count, step, incrementDispatch, decrementDispatch, setStepDispatch } = props;

  const handlerInput = ({ target: { value } }) => setStepDispatch(Number(value));
  
  return (
    <>
      <h2>count: {count}</h2>
      <button onClick={incrementDispatch}>+</button>
      <button onClick={decrementDispatch}>-</button>
      <input type="number" value={step} onChange={handlerInput} />
    </>
  );
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  incrementDispatch : () => dispatch(ActionCreators.increment()),
  decrementDispatch : () => dispatch(ActionCreators.decrement()),
  setStepDispatch : (newStep) => dispatch(ActionCreators.setStep(newStep))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
