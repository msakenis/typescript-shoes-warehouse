import React from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { Heading, Button, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { getChosenProduct } from '../../../helpers/sharedHelperFunctions';
import { ProductDetailsTable } from '../../../components';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { priceHistoryOptions, quantityHistoryOptions } from './ChartOptions';
import { ProductType } from '../../../helpers/SharedTypes';

const PreviewProduct: React.FC = () => {
    const { id } = useParams<Record<string, string>>(); // take router param as product id
    const productsJson = localStorage.getItem('products');
    const products = productsJson !== null ? JSON.parse(productsJson) : []; // local storage just to emulate db
    const product = getChosenProduct(+id, products); // func which gets the product from all products in fake DB
    const history = useHistory();
    const productsHistoryJson = localStorage.getItem('productsHistory');
    const productsHistory = productsHistoryJson !== null ? JSON.parse(productsHistoryJson) : [];
    const productHistory = productsHistory.filter((product: ProductType) => product.id === +id)[0];

    return (
        <>
            {product ? (
                <>
                    <Heading
                        as="h2"
                        size="lg"
                        color="gray.500"
                        fontWeight="500"
                        textAlign={['center', 'center', 'left']}
                        pt="10"
                        pb="10"
                    >
                        {product.name} {product.type}
                    </Heading>
                    <Tabs variant="enclosed">
                        <TabList>
                            <Tab>Product Details</Tab>
                            <Tab>Price History</Tab>
                            <Tab>Quantity History</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <ProductDetailsTable product={product} />
                            </TabPanel>
                            <TabPanel>
                                <HighchartsReact
                                    highcharts={Highcharts}
                                    options={priceHistoryOptions(productHistory.priceHistory, product.name)}
                                />
                            </TabPanel>
                            <TabPanel>
                                <HighchartsReact
                                    highcharts={Highcharts}
                                    options={quantityHistoryOptions(productHistory.quantityHistory, product.name)}
                                />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                    <Button mt="10" w={['100%', '30%', '20%']} onClick={() => history.push('/products')}>
                        Back
                    </Button>
                </>
            ) : (
                <Redirect to="/products" /> // if manually tries to enter /products/1 and no such product, will be redirected to main page
            )}
        </>
    );
};

export default PreviewProduct;
