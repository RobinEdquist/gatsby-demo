import React, { Component } from "react"
import Footer from "../../images/assets/footer.svg"
import Card from "../Card/Card"
import "./footer.scss"

interface Props {}
interface State {}

export default class footer extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className="footer">
        <div className="footer-shape-container">
          <Footer />
        </div>
        <div className="footer-left-right-container">
          <div className="left-container">
            <div className="experience-container">
              <h3 className="footer-title">Education</h3>
              <hr className="footer-title-line" />
              <table>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Where</th>
                    <th>What</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ongoing (2014)</td>
                    <td>Chalmers</td>
                    <td>Computer Science & Engineering</td>
                  </tr>
                  <tr>
                    <td>2016 - 2017</td>
                    <td>University of Gothenburg</td>
                    <td>Psychology</td>
                  </tr>
                  <tr>
                    <td>Ongoing (2018)</td>
                    <td>Chalmers</td>
                    <td>MSc Interaction design & technologies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="experience-container">
              <h3 className="footer-title">Work</h3>
              <hr className="footer-title-line" />
              <table>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Where</th>
                    <th>What</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ongoing (2014)</td>
                    <td>Din Förlängda Arm</td>
                    <td>Personal Assistant</td>
                  </tr>
                  <tr>
                    <td>2017 - 2018</td>
                    <td>Chalmers Film- och FotoCommitté</td>
                    <td>Kassör, Fotograf</td>
                  </tr>
                  <tr>
                    <td>2017 - 2018</td>
                    <td>StoreSupport</td>
                    <td>Storesman</td>
                  </tr>
                  <tr>
                    <td>Ongoing (2020)</td>
                    <td>HELO</td>
                    <td>Software Developer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="right-container">
            <Card />
          </div>
        </div>
      </div>
    )
  }
}
