import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    // Initialize state for the two dice with initial different values
    const [leftDie, setLeftDie] = useState(d6());
    const [rightDie, setRightDie] = useState(d6());

    // Function to handle rolling the dice
    const rollLeftDie = () => {
        setLeftDie(d6());
    };

    const rollRightDie = () => {
        setRightDie(d6());
    };

    // Check if the dice values are equal (snake eyes) to render the win or lose message
    const isWin = leftDie === rightDie;

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <Button onClick={rollRightDie}>Roll Right</Button>
            {isWin ? <p>You Win!</p> : <p>You Lose!</p>}
        </div>
    );
}
