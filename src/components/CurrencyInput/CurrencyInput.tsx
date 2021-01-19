import React, { useState } from 'react';
import NumberField from '../NumberField/NumberField';

const toCurrency = (number: number): string => {
    const formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
    });

    return formatter.format(number);
};

interface CurrencyInput {
    handleChange: (valueAsString: string, valueAsNumber: number) => void;
    value: number | string;
    isDisabled: boolean;
    id: number;
}

const CurrencyInput = ({ handleChange, value, isDisabled, id }: CurrencyInput): JSX.Element => {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    return (
        <div>
            {isEditing && id ? (
                <NumberField
                    max={9999999}
                    min={0}
                    step={0.05}
                    isDisabled={isDisabled}
                    value={value}
                    handleChange={handleChange}
                    handleBlur={() => {
                        setIsEditing(false);
                    }}
                />
            ) : (
                <NumberField
                    max={9999999}
                    min={0}
                    isDisabled={isDisabled}
                    value={toCurrency(+value)}
                    handleFocus={() => setIsEditing(true)}
                    readOnly
                />
            )}
        </div>
    );
};

export default CurrencyInput;
