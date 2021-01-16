import React from 'react';
import { DeleteIcon, EditIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { IconButton, Stack } from '@chakra-ui/react';
import { ConfirmIconGroup } from '../';
import { func, bool, number } from 'prop-types';

function ActionIconGroup({
  handlePreview,
  handleEdit,
  handleDelete,
  isDisabled,
  displayConfirmGroup,
  handleDecline,
  handleConfirm,
  selectedProdId,
  id,
}) {
  return displayConfirmGroup && selectedProdId === id ? (
    <ConfirmIconGroup
      handleConfirm={handleConfirm}
      handleDecline={handleDecline}
    />
  ) : (
    <Stack spacing="2" direction="row">
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Preview product"
        icon={<InfoOutlineIcon />}
        size="sm"
        isDisabled={isDisabled}
        onClick={handlePreview}
      />
      <IconButton
        variant="outline"
        colorScheme="yellow"
        aria-label="Edit product"
        icon={<EditIcon />}
        size="sm"
        isDisabled={isDisabled}
        onClick={handleEdit}
      />
      <IconButton
        variant="outline"
        colorScheme="red"
        aria-label="Delete product"
        icon={<DeleteIcon />}
        size="sm"
        isDisabled={isDisabled}
        onClick={handleDelete}
      />
    </Stack>
  );
}

ActionIconGroup.propTypes = {
  handlePreview: func.isRequired,
  handleEdit: func.isRequired,
  handleDelete: func.isRequired,
  isDisabled: bool,
  displayConfirmGroup: bool.isRequired,
  handleDecline: func.isRequired,
  handleConfirm: func.isRequired,
  selectedProdId: number.isRequired,
  id: number.isRequired,
};

export default ActionIconGroup;
