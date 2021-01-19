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
    handleChange?: (valueAsString: string, valueAsNumber: number) => void;
    step?: number;
    pattern?: string;
    handleBlur?: (event: React.FocusEvent<HTMLDivElement>) => void | undefined;
    handleFocus?: (event: React.FocusEvent<HTMLDivElement>) => void | undefined;
    readOnly?: boolean;
}

const NumberField = ({
    max,
    min,
    isDisabled,
    value,
    handleChange,
    step,
    pattern,
    handleBlur,
    handleFocus,
    readOnly,
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
            onBlur={handleBlur}
            onFocus={handleFocus}
            step={step}
            pattern={pattern}
            readOnly={readOnly}
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
