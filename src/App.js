import {connect} from 'react-redux';

function App(props) {
  const {count, step, dispatch} =props;
  const increment = ()=>{
    const action = {type:'INCREMENT'}
    dispatch(action)
  }
  const decrement = ()=>{
    const action = {type:'DECREMENT'}
    dispatch(action)
  }
  const handlerInput = ({target:{value}})=>{
    const action = {type:'SET_STEP', newStep: Number(value)}
    dispatch(action)
  }
  return (
    <>
      <h2>count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type="number" value={step} onChange={handlerInput} />
    </>
  );
}

//function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)

const mapStateToProps=(state)=>state;

// const WithProps = connect(mapStateToProps);
// const AppWithProps = WithProps(App);

export default connect(mapStateToProps)(App);
