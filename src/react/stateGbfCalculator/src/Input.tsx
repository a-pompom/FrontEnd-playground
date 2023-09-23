import React, {ChangeEvent} from "react";

type Props = {
    id: string;
    label: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<Props> = ({id, label, handleChange}) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            type="number"
            onChange={handleChange}
            defaultValue={0}
        />
    </div>
);