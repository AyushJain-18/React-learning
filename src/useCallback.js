import React, { useCallback } from "react";

export const ButtonComponent = (props) => {
  console.log("Button component is rendered");
  return (
    <div>
      <button onClick={props.submit}>Submit</button>
    </div>
  );
};

export const MemoizedButton = React.memo(ButtonComponent);

const ButtonContainer = (props) => {
  const [count, setCount] = React.useState(0);
  console.log("ButtonContainer renders with props value", props.number);
  handleSubmit = () => {
    console.log("Submitted successfully");
  };
  const memoizedHandleSubmit = useCallback(handleSubmit, []);
  return (
    <div>
      <h2>Button Container</h2>
      <button onClick={() => setCount(count + 1)}>
        increase count {count}
      </button>
      <MemoizedButton submit={memoizedHandleSubmit} />
      {/* <MemoizedButton submit={handleSubmit} /> */}
    </div>
  );
};

export default ButtonContainer;
