import React from 'react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { IconButton, Stack, Text } from '@chakra-ui/react';
import { func } from 'prop-types';

function ConfirmIconGroup({ handleConfirm, handleDecline }) {
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
}

ConfirmIconGroup.propTypes = {
  handleConfirm: func.isRequired,
  handleDecline: func.isRequired,
};

export default ConfirmIconGroup;
