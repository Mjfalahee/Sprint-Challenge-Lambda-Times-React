import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 

//console.log("Carousel Data:");
//console.log(carouselData);
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      index: 0
    }
  }
  componentDidMount(){
      this.setState({carousel: carouselData});
  }

  leftClick = () => {
    if (this.state.index === 0) {
      this.setState({index: 3});
    }
    
    else {
      let leftindex = this.state.index;
      leftindex--;
      this.setState({index: leftindex});
    }
  }

  rightClick = () => {
    if (this.state.index === 3) {
      this.setState({index: 0});
    }
    else {
      let rightindex = this.state.index;
      rightindex++;
      this.setState({index: rightindex});
    }
  }

  selectedImage = () => {
    //console.log('Carousel selected: ');
    //console.log(this.state.index);
    //console.log(this.state.carousel[0]);
    return <img src={this.state.carousel[this.state.index]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}