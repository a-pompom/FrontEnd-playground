import React, {ChangeEvent} from "react";
import {toUnitsOfNumber} from "@/JewelryCalculator.tsx";
import {Input} from "@/Input.tsx";

type Props = {
    jewelry: number;
    setJewelry: React.Dispatch<React.SetStateAction<number>>;
};

export const Jewelry: React.FC<Props> = ({jewelry, setJewelry}) => {
    const handleJewelryChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setJewelry(() => toUnitsOfNumber(event.target.value, jewelry));
    };

    return (
        <Input id={"jewelry"} label={"石"} handleChange={handleJewelryChange}/>
    );
};