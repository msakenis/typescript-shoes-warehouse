import React from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import {
  Heading,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { getChosenProduct } from '../../../helpers/sharedHelperFunctions';
import { ProductDetailsTable } from '../../../components';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { priceHistoryOptions, quantityHistoryOptions } from './ChartOptions';

function PreviewProduct() {
  const { id } = useParams(); // take router param as product id
  const products = JSON.parse(localStorage.getItem('products')); // local storage just to emulate db
  const product = getChosenProduct(id, products); // func which gets the product from all products in fake DB
  const history = useHistory();
  const productsHistory = JSON.parse(localStorage.getItem('productsHistory'));
  const productHistory = getChosenProduct(id, productsHistory);

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
                  options={priceHistoryOptions(
                    productHistory.priceHistory,
                    product.name
                  )}
                />
              </TabPanel>
              <TabPanel>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={quantityHistoryOptions(
                    productHistory.quantityHistory,
                    product.name
                  )}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Button
            mt="10"
            w={['100%', '30%', '20%']}
            onClick={() => history.push('/products')}
          >
            Back
          </Button>
        </>
      ) : (
        <Redirect to="/products" /> // if manually tries to enter /products/1 and no such product, will be redirected to main page
      )}
    </>
  );
}

export default PreviewProduct;
