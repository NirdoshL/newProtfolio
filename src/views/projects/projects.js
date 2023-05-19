import React from "react";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  createTheme,
  themes
} from "@merc/react-timeline/";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

//Css file
import "./project.css";

//images
import TicketBooking from "../../assets/img/projects/Online Ticket Booking.png";
import Pharmacy from "../../assets/img/projects/Pharmacy.png";
import School from "../../assets/img/projects/School.png";
import PUBG from "../../assets/img/projects/Pubg tournament.png";
import ECommerce from "../../assets/img/projects/E-commerce.png";
import Bitcoin from "../../assets/img/projects/Bitcoin.png";





//Skills
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_Node from "../../assets/img/skills/nodejs.svg";
import L_Redux from "../../assets/img/skills/redux.svg";
import L_Express from "../../assets/img/skills/express.svg";
import L_TypeScript from "../../assets/img/skills/typescript.svg";
import L_Material from "../../assets/img/skills/material-ui-1.svg";
import L_Styled from "../../assets/img/skills/styled-components.svg";


// Custom timline theme
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#efefef"
  },
  date: {
    backgroundColor: "#ec4b4f"
  },
  marker: {
    borderColor: "#070d59"
  },
  timelineTrack: {
    backgroundColor: "#ec4b4f"
  }
});

const ProjectTimeline = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline theme={customTheme}>
        <Events>
           {/* //Ricket Booking using material UI css node */}
           <ImageEvent
            date="6th May, 2023"
            className="text-center"
            text="Online Ticket Booking"
            src={TicketBooking}
            alt="Online Ticket Booking"
          >
            <div className="d-flex justify-content-center flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Online Ticket Booking system where Admin can create,delete,update and read ticket and movies details.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Provide user friendy Enviroment.</li>
                          <li>Admin can Create, Update, Delete and Read movies details. </li>
                          <li>Backend blocks origin except http:localhost:3000.</li>
                          <li>Powered by React JS,Redux-Toolkit, Material UI, Nivo-Chart and Css</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Redux}
                                alt="Redux"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux-Toolkit
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Node}
                                alt="Node"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node Js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Material}
                                alt="Material UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Express}
                                alt="Material UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express Js
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-center flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/NirdoshL/cinema"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          
        {/* //School Admin pannel */}
          <ImageEvent
            date="10th Apr, 2023"
            className="text-center"
            text="School Admin Pannel"
            src={School}
            alt="School Admin Pannel"
          >
            <div className="d-flex justify-content-center flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a React based School Admin Pannel where Admin can create,delete,update and read ticket and movies details.. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Provide user friendy Enviroment.</li>
                          <li>Admin can Create, Update, Delete and Read movies details. </li>
                          <li>Backend blocks origin except http:localhost:3000.</li>
                          <li>Powered by React JS, Material UI, Nivo-Chart and Css</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Redux}
                                alt="Redux"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux-Toolkit
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Node}
                                alt="Node"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node Js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Express}
                                alt="Material UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express Js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Material}
                                alt="Material UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material UI
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-center flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/NirdoshL/School-Frontend-react-"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* //Bitcoin Table */}
          <ImageEvent
            date="12th Apr, 2023"
            className="text-center"
            text="Bitcoin"
            src={Bitcoin}
            alt="Bitcoin"
          >
            <div className="d-flex justify-content-center flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is an Bitcoin App which shows real-time bitcoins and user can convert bitcoin into INR and USD.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Provides real-time bitcoin values.</li>
                          <li>Powered by React JS ,Chakra UI, Axios(data fetching) and Css</li>
                          <li>Responsive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Styled}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Styled Component
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_TypeScript}
                                alt="typescript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Typescript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-center flex-nowrap text-center">
              <UrlButton
                  href="https://github.com/NirdoshL/bitcoin"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* //Pubg Tournament */}
          <ImageEvent
            date="10th Feb, 2023"
            className="text-center"
            text="Pubg Tournament"
            src={PUBG}
            alt="Pubg Tournament"
          >
            <div className="d-flex justify-content-center flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is Pubg Tournament App where player can create slots and can buy Pubg room cards.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            User can buy Room cards but currently purchasing facility isnot enabled.
                          </li>
                          <li>Powered by React JS, Chakra Ui.</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Material}
                                alt="Material"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Material Ui
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Styled}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Styled Component
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_TypeScript}
                                alt="typescript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Typescript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-center flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/NirdoshL/bitcoin"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* //Pharmacy */}

          <ImageEvent
            date="20th July, 2022"
            className="text-center"
            text="Pharmacy"
            src={Pharmacy}
            alt="Pharmacy"
          >
            <div className="d-flex justify-content-center flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Single Page pharmacy App.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Powered by React JS, Chakra UI.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-center flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/NirdoshL/React-pharmacy-web-app"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* E-commerce */}

          <ImageEvent
            date="29th Dec, 2022"
            className="text-center"
            text="E-Commerce"
            src={ECommerce}
            alt="E-Commerce"
          >
            <div className="d-flex justify-content-center flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is an E-commerce App designed using React-Redux.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User can add items to cart. </li>
                          <li>User can remove items from cart. </li>
                          <li>User can increase and decrease price of items from cart.</li>
                          <li>Powered by React, React-Redux, Material Ui and CSS.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Material}
                                alt="material ui"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Material UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Styled}
                                alt="styled"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Styled Component
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Redux}
                                alt="redux"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React-Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_TypeScript}
                                alt="typescript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Typescript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-center flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/NirdoshL/Shopping-MUI-Redux-Toolkit"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default ProjectTimeline;
