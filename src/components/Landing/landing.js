import React, { Component } from "react"
import LandingSVG from "../../images/assets/landing-shape.svg"
import "./landing.scss"

export class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <LandingSVG className="landing-blob" />
        <h1 className="title">
          Hello. <br /> I'm Robin
        </h1>
      </div>
    )
  }
}

export default Landing
