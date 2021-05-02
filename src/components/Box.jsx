import * as React from "react";

class Box extends Component {
  constructor(props) {
    super(props);
  }
}
  render (
    const{key, id, color} = this.props.values
    return (
    <div
      style={{
        key: {id},
        id: {id},
        width: "180px",
        height: "180px",
        backgroundColor: color,
        border: "1px solid black",
        display: "inline-block",
      }}
      onClick={(event) => this.props.methods.handleBoxClick}
    >

    )
    
      
      <span>{color}</span>
    </div>
  );
};

export default Box;
