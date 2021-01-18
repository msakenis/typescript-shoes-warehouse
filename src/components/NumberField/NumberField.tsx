import React from 'react';
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';

interface NumberFieldProps {
    max: number;
    min: number;
    isDisabled: boolean;
    value: number | string;
    handleChange: (valueAsString: string, valueAsNumber: number) => void;
    step?: number;
    precision?: number;
    pattern?: string;
}

const NumberField = ({
    max,
    min,
    isDisabled,
    value,
    handleChange,
    step,
    precision,
    pattern,
}: NumberFieldProps): JSX.Element => {
    return (
        <NumberInput
            minW="100px"
            inputMode="numeric"
            max={max}
            min={min}
            keepWithinRange={false}
            clampValueOnBlur={false}
            isDisabled={isDisabled}
            value={value}
            onChange={handleChange}
            step={step}
            precision={precision}
            pattern={pattern}
        >
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
    );
};

export default NumberField;
