import React, { useState } from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import {
    Heading,
    Input,
    Stack,
    FormControl,
    FormLabel,
    FormHelperText,
    Button,
    Radio,
    RadioGroup,
    useToast,
} from '@chakra-ui/react';
import { getChosenProduct, numberInputValidation, getProducts } from '../../../helpers/sharedHelperFunctions';
import { ProductType } from '../../../helpers/SharedTypes';

type EditProductFnTypes = (
    e: React.FormEvent<HTMLFormElement>,
    id: number,
    values: ProductType,
    prods: ProductType[],
    toast: (a: Record<string, unknown>) => void,
) => void;

const editProduct: EditProductFnTypes = (e, id, fieldValues, currentProducts, toast) => {
    e.preventDefault();

    const updatedProducts = currentProducts.map((product) => (product.id === id ? fieldValues : product)); // sets new field values to the selected id product

    localStorage.setItem('products', JSON.stringify(updatedProducts)); // rewrites fake db to new products

    //toast would be called if success status from back-end recieved
    toast({
        title: 'Product updated successfully!',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top',
    });
};

const EditProduct: React.FC = () => {
    const { id } = useParams<Record<string, string>>();
    const currentProducts = getProducts();
    const product = getChosenProduct(+id, currentProducts);
    const [fieldValues, setFieldValues] = useState(product);
    const toast = useToast();
    const history = useHistory();

    return (
        <>
            {
                // if manually tries to enter /products/1 and no such product, will be redirected to main page
                product ? (
                    <>
                        <Heading
                            as="h2"
                            size="lg"
                            color="gray.500"
                            fontWeight="500"
                            textAlign={['center', 'center', 'left']}
                            pt="10"
                        >
                            Edit {product.name} {product.type}
                        </Heading>

                        <Stack maxW="800px" pt="10">
                            <form
                                onSubmit={(e) => {
                                    editProduct(e, product.id, fieldValues, currentProducts, toast);
                                }}
                            >
                                <Stack direction={['column', 'row']}>
                                    <FormControl id="name" isRequired>
                                        <FormLabel>Name</FormLabel>
                                        <Input
                                            type="text"
                                            onChange={(e) => setFieldValues({ ...fieldValues, name: e.target.value })}
                                            value={fieldValues.name}
                                            placeholder="Name"
                                            maxLength={50}
                                        />
                                        <FormHelperText>e.g. &quot;Adidas&quot;</FormHelperText>
                                    </FormControl>

                                    <FormControl id="type" isRequired>
                                        <FormLabel>Type</FormLabel>
                                        <Input
                                            type="text"
                                            onChange={(e) => setFieldValues({ ...fieldValues, type: e.target.value })}
                                            value={fieldValues.type}
                                            placeholder="Type"
                                            maxLength={50}
                                        />
                                        <FormHelperText>e.g. &quot;Sneakers&quot; </FormHelperText>
                                    </FormControl>
                                </Stack>

                                <Stack direction={['column', 'row']} mt="5">
                                    <FormControl id="ean" isRequired>
                                        <FormLabel>EAN Code</FormLabel>
                                        <Input
                                            type="text"
                                            onChange={(e) => setFieldValues({ ...fieldValues, ean: +e.target.value })}
                                            value={fieldValues.ean}
                                            placeholder="Color"
                                            minLength={13}
                                            maxLength={13}
                                            pattern="^[0-9]*$"
                                        />
                                        <FormHelperText>This is randomly generated EAN code</FormHelperText>
                                    </FormControl>

                                    <FormControl id="color" isRequired>
                                        <FormLabel>Color</FormLabel>
                                        <Input
                                            type="text"
                                            onChange={(e) =>
                                                setFieldValues({
                                                    ...fieldValues,
                                                    color: e.target.value,
                                                })
                                            }
                                            value={fieldValues.color}
                                            placeholder="Color"
                                            maxLength={50}
                                        />
                                        <FormHelperText>e.g. &quot;Red&quot;</FormHelperText>
                                    </FormControl>

                                    <FormControl id="weight" isRequired>
                                        <FormLabel>Weight (g)</FormLabel>
                                        <Input
                                            type="text"
                                            onChange={(e) => {
                                                if (numberInputValidation(e.target.value)) {
                                                    setFieldValues({
                                                        ...fieldValues,
                                                        weight: +e.target.value,
                                                    });
                                                }
                                            }}
                                            value={fieldValues.weight}
                                            placeholder="Grams"
                                            maxLength={7}
                                        />
                                        <FormHelperText>weight in grams. E.g 1000</FormHelperText>
                                    </FormControl>
                                </Stack>

                                <RadioGroup
                                    onChange={
                                        (value) => setFieldValues({ ...fieldValues, active: String(value) === 'true' }) // chakra Radio accepts booleans as strings so converting to boolean
                                    }
                                    value={String(fieldValues.active)}
                                    mt="4"
                                >
                                    <Stack direction={['column', 'row']}>
                                        <Radio value="true">Active</Radio>
                                        <Radio value="false">Inactive</Radio>
                                    </Stack>
                                </RadioGroup>

                                <Button type="submit" w={['100%', '30%', '20%']} mt="8">
                                    Save
                                </Button>

                                <Button
                                    type="button"
                                    onClick={() => history.push('/products')}
                                    mt={['2', '8']}
                                    ml={['0', '4']}
                                    w={['100%', '30%', '20%']}
                                >
                                    Back
                                </Button>
                            </form>
                        </Stack>
                    </>
                ) : (
                    <Redirect to="/products" />
                ) // if manually tries to enter /products/1 and no such product, will be redirected to main page
            }
        </>
    );
};

export default EditProduct;
