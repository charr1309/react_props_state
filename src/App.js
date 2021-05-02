import React, { Component } from 'react';
import "./App.css";
import Box from "./compoments/box.jsx";
ReactDOM.render(<App/>,document.getElementById('root'));

class App extends Component {
  constructor(props) {
    super(props);

    boxes = [];
    numBoxes = 24;
    for(let i=0; i<=numBoxes; i++){
      boxes.push(
        {
          id: i,
          color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()
        })`
    })
    }

    // set default state
     this.state = {
      boxes,
    }
    // bind methods to this
    this.handleboxClick = this.handleboxClick.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
  }
   
  handleboxClick (e) {
    const newBoxes = this.state.boxes.map(box) =>{
      if(this.box.id == e.target.id.value){
        box.color = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
      }
      return this.setState({
        boxes: newBoxes,
      });
    };

  }
  getRandomColor(){
    const rgb = Math.floor(Math.random() * 256);
    return rgb;
  }
  
 
  render() {
    const renderBoxes = this.state.boxes.map((box) => {
      return (
        <Box
          values ={{key: box.id, id: box.id, color: box.color}}
          methods={{handleboxClick: this.handleboxClick}} 
        />
      ); 
      


    })
    
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <div className="App">{renderBoxes}</div>
      </main>
    );
  }
}

export default App;
