import React from 'react';
import { DeleteIcon, EditIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { IconButton, Stack } from '@chakra-ui/react';
import { ConfirmIconGroup } from '..';

interface Props {
    handlePreview: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleEdit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isDisabled?: boolean;
    displayConfirmGroup: boolean;
    handleDecline: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleConfirm: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    selectedProdId: number;
    id: number;
}

const ActionIconGroup = ({
    handlePreview,
    handleEdit,
    handleDelete,
    isDisabled,
    displayConfirmGroup,
    handleDecline,
    handleConfirm,
    selectedProdId,
    id,
}: Props): JSX.Element => {
    return displayConfirmGroup && selectedProdId === id ? (
        <ConfirmIconGroup handleConfirm={handleConfirm} handleDecline={handleDecline} />
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
};

export default ActionIconGroup;
