import React, { Component } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import "./ProjectShowcase.scss"

type projectProps = {
  flipped: boolean
  illustration: object
  title: string
  description: string
  skills: Array<string>
}

export class ProjectShowcase extends Component<projectProps, {}> {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    AOS.init()
  }
  getColorArray(skill: string): Array<string> {
    let colorArray: Array<string> = []
    switch (skill) {
      case "Arduino":
        colorArray = ["#ffffff", "#3F8F96"]
        break
      case "JS":
        colorArray = ["#ECD94E", "#000000"]
        break
      case "CSS":
        colorArray = ["#FFDBDB", "#ffffff"]
        break
      case "HTML":
        colorArray = ["#FF6060", "#ffffff"]
        break
      case "Electronics":
        colorArray = ["#000000", "#ffffff"]
        break
      case "Android":
        colorArray = ["#49985E", "#ffffff"]
        break
      case "Design":
        colorArray = ["#6C36FF", "#ffffff"]
        break
      case "Java":
        colorArray = ["#5A7D9A", "#ffffff"]
        break

      default:
        colorArray = ["#FF6131", "#ffffff"]
        break
    }
    return colorArray
  }

  render() {
    return (
      <div
        className={`project-container ${this.props.flipped ? "flipped" : ""}`}
      >
        <div
          className="illustration"
          data-aos={`${this.props.flipped ? "fade-left" : "fade-right"}`}
        >
          {this.props.illustration}
        </div>
        <div
          className="text-content"
          data-aos={`${this.props.flipped ? "fade-right" : "fade-left"}`}
          data-aos-duration="700"
        >
          <h3 className="project-title">{this.props.title}</h3>
          <p className="description">{this.props.description}</p>
          <ul className={`skills ${this.props.flipped ? "flipped" : ""}`}>
            {this.props.skills.map((skill, index) => {
              return (
                <li
                  className={`skill ${
                    this.props.flipped ? "rightSkill" : "leftSkill"
                  }`}
                  key={index}
                  style={{
                    background: this.getColorArray(skill)[0],
                    color: this.getColorArray(skill)[1],
                  }}
                  data-aos="flip-down"
                  data-aos-delay={`${(index * 200).toString()}`}
                  data-aos-duration="400"
                >
                  {skill}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default ProjectShowcase
