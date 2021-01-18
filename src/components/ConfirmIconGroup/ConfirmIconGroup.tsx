import React from 'react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { IconButton, Stack, Text } from '@chakra-ui/react';

interface ConfirmIconGroupProps {
    handleDecline: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleConfirm: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ConfirmIconGroup = ({ handleConfirm, handleDecline }: ConfirmIconGroupProps): JSX.Element => {
    return (
        <Stack direction="row" align="center" spacing="1">
            <Text fontSize="12px">Delete?</Text>
            <IconButton
                variant="outline"
                colorScheme="red"
                aria-label="Confirm"
                size="sm"
                icon={<CheckIcon />}
                onClick={handleConfirm}
            />
            <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Decline"
                size="sm"
                icon={<CloseIcon />}
                onClick={handleDecline}
            />
        </Stack>
    );
};

export default ConfirmIconGroup;
