import React from 'react';
import { Table, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { ProductType } from '../../helpers/SharedTypes';
interface ProductDetailsTableProps {
    product: ProductType;
}

const ProductDetailsTable = ({ product }: ProductDetailsTableProps): JSX.Element => {
    return (
        <Table variant="simple" mt="10" w={['100%', '100%', '600px']}>
            <Tbody>
                <Tr>
                    <Th>Name:</Th>
                    <Td>{product.name}</Td>
                </Tr>
                <Tr>
                    <Th>EAN Code:</Th>
                    <Td>{product.ean}</Td>
                </Tr>
                <Tr>
                    <Th>Type:</Th>
                    <Td>{product.type}</Td>
                </Tr>
                <Tr>
                    <Th>Weigth:</Th>
                    <Td>{product.weight / 1000} kg</Td>
                </Tr>
                <Tr>
                    <Th>Color:</Th>
                    <Td>{product.color}</Td>
                </Tr>
                <Tr>
                    <Th>Current Quantity(pcs):</Th>
                    <Td>{product.currentQnty}</Td>
                </Tr>
                <Tr>
                    <Th>Current Price:</Th>
                    <Td>{product.price} &euro;</Td>
                </Tr>
                <Tr>
                    <Th>Active:</Th>
                    <Td>{product.active ? 'YES' : 'NO'}</Td>
                </Tr>
            </Tbody>
        </Table>
    );
};

export default ProductDetailsTable;
