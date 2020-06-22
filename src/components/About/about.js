import React, { Component } from "react"
import "./about.scss"
import AboutSVG from "../../images/assets/info-shape.svg"
import LineSVG from "../../images/assets/line-shape.svg"

export class About extends Component {
  render() {
    return (
      <div className="aboutParent">
        <AboutSVG className="blob" />
        <div className="aboutTop">
          <h3 className="aboutText">
            I’m a software developer and interaction designer based in
            Gothenburg, Sweden.
          </h3>
          <div className="lineParent">
            <LineSVG className="line" />
          </div>
        </div>
      </div>
    )
  }
}

export default About
