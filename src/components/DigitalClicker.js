// Code DigitalClicker Component Here
import React from 'react'
class DigitalClicker extends React.Component {

  constructor() {
    
  }
  clicked = () => {
    this.setState((previousState) => {
      return {timesClicked: this.previousState.timesClicked++}
    })
  }
  render(){
    return <button onClick={this.clicked}>clicked {this.state.timesClicked} times!</button>
  }
}
export default DigitalClicker