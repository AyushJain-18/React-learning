import React from "react";
import ParrentComponent from "./Purecomponent";
import MemoizedFunctionResult from "./useMemo";
import ButtonContainer, {
  MemoizedButton,
  ButtonComponent,
} from "./useCallback";
class App extends React.Component {
  state = { number: 1 };
  handleSubmit = () => {};
  render() {
    console.log("App renders", this.state.number);
    return (
      <>
        <button
          onClick={() => {
            this.setState((prevState) => ({ number: prevState.number + 1 }));
          }}
        >
          Inc
        </button>
        {/* for testing pure component */}
        {/* <ParrentComponent /> */}
        {/* for testing for memoized function result */}
        {/* <MemoizedFunctionResult number={this.state.number} /> */}

        {/* for testing for callback function which memoized function itself */}

        {/* this is without memoized and will render after evry state update on APP*/}
        {/* <ButtonComponent submit={this.handleSubmit} /> */}
        {/* this is Pure Component, and will run only when React is trully updated*/}
        {/* <MemoizedButton submit={this.handleSubmit} />  */}
        {/* Functional component, which use useCallback hook*/}
        {/* <ButtonContainer number={this.state.number} /> */}
      </>
    );
  }
}

export default App;
