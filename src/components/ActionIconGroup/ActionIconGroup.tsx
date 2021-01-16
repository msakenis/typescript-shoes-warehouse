import React from 'react';
import { DeleteIcon, EditIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { IconButton, Stack } from '@chakra-ui/react';
import { ConfirmIconGroup } from '..';


interface Props {
  
  handlePreview:()=> void;
  handleEdit: ()=> void;
  handleDelete: ()=> void;
  isDisabled?: boolean;
  displayConfirmGroup: boolean;
  handleDecline: ()=> void;
  handleConfirm: ()=> void;
  selectedProdId: number;
  id: number;
}

const ActionIconGroup: React.FC<Props> = ({
  handlePreview,
  handleEdit,
  handleDelete,
  isDisabled,
  displayConfirmGroup,
  handleDecline,
  handleConfirm,
  selectedProdId,
  id,
}) => {
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



export default ActionIconGroup;
