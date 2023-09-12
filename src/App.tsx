import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import img from "./images/dunks.jpg";
import { Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "pink" }}>
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Elisa
            </p>

            <h1>Software Eng 420</h1>

            <img src={img} alt="This is a picture of my favorite dunks!" />

            <div>
                My COS classes for this semester:
                <ul>
                    <li>Software Eng</li>
                    <li>Intro to AI</li>
                    <li>Data Structers & Algorithms</li>
                </ul>
            </div>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <div>
                <Container>
                    <Row>
                        <Col>
                            This is the first column, so fun yay!!
                            <div className="red-rectangle"> </div>
                        </Col>
                        <Col>
                            This is the second column, still fun!
                            <div className="red-rectangle"> </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
