import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfProps {
    setDhValue: (newVisibility: number) => void;
    DhValue: number;
}

function Doubler({ setDhValue, DhValue }: DoubleHalfProps): JSX.Element {
    return <Button onClick={() => setDhValue(2 * DhValue)}>Double</Button>;
}

function Halver({ setDhValue, DhValue }: DoubleHalfProps): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * DhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [DhValue, setDhValue] = useState(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{DhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} DhValue={DhValue} />
            <Halver setDhValue={setDhValue} DhValue={DhValue} />
        </div>
    );
}
