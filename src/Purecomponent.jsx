import React, { PureComponent } from "react";

const ImpurefunctinalCompoennt = (props) => {
  console.log("Impure Funcrtioanl renders", props.name);
  return <div> Impure Funcrtioanl {props.name}</div>;
};

const PurefunctinalCompoennt = (props) => {
  console.log("Pure Funcrtioanl renders", props.name);
  return <div> Pure Funcrtioanl {props.name}</div>;
};
const MemoizedPurefuncitionalCompoennt = React.memo(PurefunctinalCompoennt);

class ImpureComponent extends React.Component {
  // state = { number: 1 };
  render() {
    console.log("Impure renders", this.props.name);
    return <div> {this.props.name}</div>;
  }
}

// MyPureComponent.js

class MyPureComponent extends PureComponent {
  state = { number: 1 };
  render() {
    console.log("PURE renders", this.props.name);
    return <div>PURE Component {this.props.name}</div>;
  }
}

class ParrentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Jain" });
    }, 5000);
    setTimeout(() => {
      this.setState({ name: "Ayush" });
    }, 20000);
  }

  render() {
    //.console.log("Parrent renders", this.props.number);
    return (
      <div>
        <h2>Impure Component:</h2>
        <ImpureComponent name={this.state.name} />
        <h2>Pure Component:</h2>
        <MyPureComponent name={this.state.name} />
        <ImpurefunctinalCompoennt name={this.state.name} />
        <MemoizedPurefuncitionalCompoennt name={this.state.name} />
      </div>
    );
  }
}

export default ParrentComponent;
