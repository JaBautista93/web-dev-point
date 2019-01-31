import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
  constructor (props) {
    super(props);

    this.state = {
        videoURL: '../images/Love-Coding.mp4'
    }
}
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
          <h1 className="display-3">{this.props.title}</h1>
          <p className="lead">{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
