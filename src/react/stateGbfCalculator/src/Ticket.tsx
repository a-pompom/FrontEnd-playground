import React, {ChangeEvent} from "react";
import {toUnitsOfNumber} from "@/JewelryCalculator.tsx";
import {Input} from "@/Input.tsx";

type Props = {
    ticket: number;
    setTicket: React.Dispatch<React.SetStateAction<number>>;
};

export const Ticket: React.FC<Props> = ({ticket, setTicket}) => {
    const handleTicketChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTicket(() => toUnitsOfNumber(event.target.value, ticket));
    };

    return (
        <Input id={"ticket"} label={"チケット"} handleChange={handleTicketChange}/>
    );
};
