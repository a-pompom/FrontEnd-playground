import React, {ChangeEvent} from "react";
import {toUnitsOfNumber} from "@/JewelryCalculator.tsx";
import {Input} from "@/Input.tsx";

type Props = {
    ticket10: number;
    setTicket10: React.Dispatch<React.SetStateAction<number>>;
};

export const Ticket10: React.FC<Props> = ({ticket10, setTicket10}) => {
    const handleTicket10Change = (event: ChangeEvent<HTMLInputElement>): void => {
        setTicket10(() => toUnitsOfNumber(event.target.value, ticket10));
    };

    return (
        <Input id={"ticket10"} label={"10連チケット"} handleChange={handleTicket10Change}/>
    );
};
