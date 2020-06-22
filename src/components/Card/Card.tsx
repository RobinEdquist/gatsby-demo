import React, { Component } from "react"
import "./Card.scss"
import AOS from "aos"
import "aos/dist/aos.css"

interface Props {}
interface State {}

class Card extends Component<Props, State> {
  state = {}
  componentDidMount() {
    AOS.init({
      duration: 1000,
    })
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3 className="card-name">Robin Edquist</h3>
          <p className="card-subtitle">Interaction Designer | Web Developer</p>
          <hr className="card-divider" />
        </div>
      </div>
    )
  }
}

export default Card
