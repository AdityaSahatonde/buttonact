import React from "react";

class Buttonact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ``
    };
  }
  updatePara() {
    this.setState({
      name: `Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy`
    });
  }

  render() {
    return (
      <>
        <p id="para">{this.state.name}</p>

        <button
          id="click"
          onClick={() => {
            this.updatePara();
          }}
        >
          Click
        </button>
      </>
    );
  }
}
export default Buttonact;
